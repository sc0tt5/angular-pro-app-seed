import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ScheduleList } from 'src/app/health/shared/services/schedule.service';
import { Store } from 'store';
import { AuthService } from './../../../auth/shared/services/auth.service';
import { Meal } from './meals.service';
import { Workout } from './workouts.service';

export interface ScheduleItem {
    meals: Meal[];
    workouts: Workout[];
    section: string;
    timestamp: number;
    $key?: string;
}

export interface ScheduleList {
    morning?: ScheduleItem;
    lunch?: ScheduleItem;
    evening?: ScheduleItem;
    snacks?: ScheduleItem;
    [key: string]: any;
}

@Injectable()
export class ScheduleService {
    // BehaviorSubject allows to initialize date$ with some data, could be any data
    // you can pass new values to it AND it's an Observable
    private date$ = new BehaviorSubject(new Date());
    private section$ = new Subject();
    private itemList$ = new Subject();

    items$ = this.itemList$.pipe(
        withLatestFrom(this.section$),

        map(([items, section]: any[]) => {
            const id = section.data.$key;

            const defaults: ScheduleItem = {
                workouts: null,
                meals: null,
                section: section.section,
                timestamp: new Date(section.day).getTime()
            };

            const payload = {
                ...(id ? section.data : defaults),
                ...items
            };

            if (id) {
                return this.updateSection(id, payload);
            } else {
                return this.createSection(payload);
            }
        })
    );

    // add what user select to store
    selected$ = this.section$.pipe(tap((next: any) => this.store.set('selected', next)));

    list$ = this.section$.pipe(
        map((value: any) => this.store.value[value.type]),
        tap((next: any) => this.store.set('list', next))
    );

    // set date for schedule
    schedule$: Observable<ScheduleItem[]> = this.date$.pipe(
        tap((next: any) => this.store.set('date', next)),
        map((day: any) => {
            const startAt = new Date(day.getFullYear(), day.getMonth(), day.getDate()).getTime();
            const endAt =
                new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1).getTime() - 1;

            return { startAt, endAt };
        }),
        switchMap(({ startAt, endAt }: any) => this.getSchedule(startAt, endAt)),
        map((data: any) => {
            const mapped: ScheduleList = {};

            for (const prop of data) {
                // if prop not already mapped
                if (!mapped[prop.section]) {
                    // take data from fb and parse to something angular can use
                    mapped[prop.section] = prop;
                }
            }

            return mapped;
        }),
        tap((next: any) => this.store.set('schedule', next))
    );

    constructor(
        private store: Store,
        private authService: AuthService,
        private db: AngularFireDatabase
    ) {}

    get uid() {
        return this.authService.user.uid;
    }

    updateItems(items: string[]) {
        this.itemList$.next(items);
    }

    updateDate(date: Date) {
        this.date$.next(date);
    }

    selectSection(event: any) {
        this.section$.next(event);
    }

    private createSection(payload: ScheduleItem) {
        return this.db.list(`schedule/${this.uid}`).push(payload);
    }

    private updateSection(key: string, payload: ScheduleItem) {
        return this.db.object(`schedule/${this.uid}/${key}`).update(payload);
    }

    private getSchedule(startAt: number, endAt: number) {
        return this.db
            .list(`schedule/${this.uid}`, schedule =>
                schedule
                    .orderByChild('timestamp')
                    .startAt(startAt)
                    .endAt(endAt)
            )
            .valueChanges()
            .pipe(map(next => next));
    }
}
