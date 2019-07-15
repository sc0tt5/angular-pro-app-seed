import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ScheduleItem } from 'src/app/health/shared/services/schedule.service';

// stateless component (presentational component)
@Component({
    selector: 'health-schedule-section',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-section.component.scss'],
    template: `
        <div class="schedule-section">
            <div class="schedule-section__bar">
                {{ name }}
            </div>

            <div>

                <!-- start: meals -->
                <div
                    class="schedule-section__item food"
                    *ngIf="section.meals; else addMeal"
                    (click)="onSelect('meals', section.meals)"
                >
                    <!-- if meals exist - display assigned meals -->
                    <span>{{ section.meals | join }}</span>
                </div>
                <!-- else - show the assign meal button -->
                <ng-template #addMeal>
                    <div class="schedule-section__item" (click)="onSelect('meals')">
                        Assign meal
                    </div>
                </ng-template>
                <!-- end: meals -->

                <!-- start: workouts -->
                <div
                    class="schedule-section__item workout"
                    *ngIf="section.workouts; else addWorkout"
                    (click)="onSelect('workouts', section.workouts)"
                >
                  <!-- if workouts exist - display assigned workouts -->
                    <span>{{ section.workouts | join }}</span>
                </div>
                <!-- else - show the assign workout button -->
                <ng-template #addWorkout>
                    <div class="schedule-section__item" (click)="onSelect('workouts')">
                        Assign workout
                    </div>
                </ng-template>
                <!-- end: workouts -->

            </div>
        </div>
    `
})
export class ScheduleSectionComponent {
    @Input()
    name: string;

    @Input()
    section: ScheduleItem;

    @Output()
    select = new EventEmitter<any>();

    onSelect(type: string, assigned: string[] = []) {
        const data = this.section;
        this.select.emit({
            type,
            assigned,
            data
        });
    }
}
