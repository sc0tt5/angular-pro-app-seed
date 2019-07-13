import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';
import { ScheduleItem, ScheduleService } from '../../shared/services/schedule.service';

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
        </div>
    `
})
export class ScheduleComponent implements OnInit, OnDestroy {
    date$: Observable<Date>;
    schedule$: Observable<ScheduleItem[]>;
    subscriptions: Subscription[] = [];

    constructor(private store: Store, private scheduleService: ScheduleService) {}

    changeDate(date: Date) {
        this.scheduleService.updateDate(date);
    }

    changeSection(event: any) {
        this.scheduleService.selectSection(event);
    }

    ngOnInit() {
        this.date$ = this.store.select('date');
        this.schedule$ = this.store.select('schedule');

        this.subscriptions = [
            this.scheduleService.schedule$.subscribe(),
            this.scheduleService.selected$.subscribe()
        ];
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
