import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';
import { Meal, MealsService } from '../../shared/services/meals.service';
import { ScheduleItem, ScheduleService } from '../../shared/services/schedule.service';
import { Workout, WorkoutsService } from '../../shared/services/workouts.service';

// container component (smart component)
@Component({
    selector: 'health-schedule',
    styleUrls: ['schedule.component.scss'],
    template: `
        <div class="schedule">
            <health-schedule-calendar
                [date]="date$ | async"
                [items]="schedule$ | async"
                (change)="changeDate($event)"
                (select)="changeSection($event)"
            >
            </health-schedule-calendar>

            <health-schedule-assign
                *ngIf="open"
                [section]="selected$ | async"
                [list]="list$ | async"
            >
            </health-schedule-assign>
        </div>
    `
})
export class ScheduleComponent implements OnInit, OnDestroy {
    open = false;

    date$: Observable<Date>;
    selected$: Observable<any>;
    list$: Observable<Meal[] | Workout[]>;
    schedule$: Observable<ScheduleItem[]>;
    subscriptions: Subscription[] = [];

    constructor(
        private store: Store,
        private mealsService: MealsService,
        private workoutsService: WorkoutsService,
        private scheduleService: ScheduleService
    ) {}

    changeDate(date: Date) {
        this.scheduleService.updateDate(date);
    }

    changeSection(event: any) {
        this.open = true;
        this.scheduleService.selectSection(event);
    }

    ngOnInit() {
        this.date$ = this.store.select('date');
        this.schedule$ = this.store.select('schedule');
        this.selected$ = this.store.select('selected');
        this.list$ = this.store.select('list');

        this.subscriptions = [
            this.scheduleService.schedule$.subscribe(),
            this.scheduleService.selected$.subscribe(),
            this.scheduleService.list$.subscribe(),
            this.mealsService.meals$.subscribe(),
            this.workoutsService.workouts$.subscribe()
        ];
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
