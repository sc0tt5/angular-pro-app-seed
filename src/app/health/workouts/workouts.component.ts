import { Component } from '@angular/core';

// container component (smart component)
@Component({
    selector: 'health-workouts',
    styleUrls: ['workouts.component.scss'],
    template: `
        <div>
            Workouts
        </div>
    `
})
export class WorkoutsComponent {
    constructor() {}
}
