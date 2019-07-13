import { Component } from '@angular/core';

// stateless component (presentational component)
@Component({
    selector: 'schedule-days',
    styleUrls: ['schedule-days.component.scss'],
    template: `
        <div class="days"></div>
    `
})
export class ScheduleDaysComponent {
    constructor() {}
}
