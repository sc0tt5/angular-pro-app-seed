import { Component } from '@angular/core';

// stateless component (presentational component)
@Component({
    selector: 'schedule-controls',
    styleUrls: ['schedule-controls.component.scss'],
    template: `
        <div class="controls"></div>
    `
})
export class ScheduleControlsComponent {
    constructor() {}
}
