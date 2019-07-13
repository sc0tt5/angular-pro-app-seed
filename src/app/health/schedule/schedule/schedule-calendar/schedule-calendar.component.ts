import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ScheduleItem, ScheduleList } from 'src/app/health/shared/services/schedule.service';

// stateless component (presentational component)
@Component({
    selector: 'health-schedule-calendar',
    styleUrls: ['schedule-calendar.component.scss'],
    template: `
        <div class="calendar">
            <health-schedule-controls
                [selected]="selectedDay"
                (move)="onChange($event)"
            ></health-schedule-controls>

            <health-schedule-days
                [selected]="selectedDayIndex"
                (select)="selectDay($event)"
            ></health-schedule-days>

            <health-schedule-section
                *ngFor="let section of sections"
                [name]="section.name"
                [section]="getSection(section.key)"
            >
            </health-schedule-section>
        </div>
    `
})
export class ScheduleCalendarComponent implements OnChanges {
    selectedDay: Date;
    selectedDayIndex: number;
    selectedWeek: Date;

    sections = [
        { key: 'morning', name: 'Morning' },
        { key: 'lunch', name: 'Lunch' },
        { key: 'evening', name: 'Evening' },
        { key: 'snacks', name: 'Snacks and Drinks' }
    ];

    @Input()
    set date(date: Date) {
        this.selectedDay = new Date(date.getTime());
    }

    @Input()
    items: ScheduleList;

    @Output()
    change = new EventEmitter<Date>();

    constructor() {}

    ngOnChanges() {
        this.selectedDayIndex = this.getToday(this.selectedDay);
        this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay));
    }

    getSection(name: string): ScheduleItem {
        return (this.items && this.items[name]) || {};
    }

    selectDay(index: number) {
        const selectedDay = new Date(this.selectedWeek);
        selectedDay.setDate(selectedDay.getDate() + index);
        this.change.emit(selectedDay);
    }

    onChange(weekOffset: number) {
        const startOfWeek = this.getStartOfWeek(new Date());
        const startDate = new Date(
            startOfWeek.getFullYear(),
            startOfWeek.getMonth(),
            startOfWeek.getDate()
        );
        startDate.setDate(startDate.getDate() + weekOffset * 7);
        this.change.emit(startDate);
    }

    private getToday(date: Date) {
        let today = date.getDay() - 1;
        if (today < 0) {
            today = 6;
        }
        return today;
    }

    private getStartOfWeek(date: Date) {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    }
}
