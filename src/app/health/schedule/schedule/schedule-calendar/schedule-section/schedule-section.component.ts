import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ScheduleItem } from '@health/shared/services/schedule.service';

// stateless component (presentational component)
@Component({
    selector: 'health-schedule-section',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-section.component.scss'],
    templateUrl: './schedule-section.component.html'
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
