// prettier-ignore
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from 'src/app/health/shared/services/meals.service';
import { Workout } from 'src/app/health/shared/services/workouts.service';

@Component({
    selector: 'health-schedule-assign',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['schedule-assign.component.scss'],
    templateUrl: './schedule-assign.component.html'
})
export class ScheduleAssignComponent implements OnInit {
    private selected: string[] = [];

    @Input()
    section: any;

    @Input()
    list: Meal[] | Workout[];

    @Output()
    update = new EventEmitter<any>();

    @Output()
    cancel = new EventEmitter<any>();

    ngOnInit() {
        this.selected = [...this.section.assigned];
    }

    toggleItem(name: string) {
        if (this.exists(name)) {
            this.selected = this.selected.filter(item => item !== name);
        } else {
            this.selected = [...this.selected, name];
        }
    }

    getRoute(name: string) {
        return [`../${name}/new`];
    }

    exists(name: string) {
        // tslint:disable-next-line: no-bitwise
        return !!~this.selected.indexOf(name);
    }

    updateAssign() {
        this.update.emit({
            [this.section.type]: this.selected
        });
    }

    cancelAssign() {
        this.cancel.emit();
    }
}
