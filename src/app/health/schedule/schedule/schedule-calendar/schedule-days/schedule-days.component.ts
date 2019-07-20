import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// stateless component (presentational component)
@Component({
    selector: 'health-schedule-days',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-days.component.scss'],
    templateUrl: './schedule-days.component.html'
})
export class ScheduleDaysComponent {
    days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    @Input()
    selected: number;

    @Output()
    select = new EventEmitter<number>();

    selectDay(index: number) {
        this.select.emit(index);
    }
}
