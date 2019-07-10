import { Component } from '@angular/core';

// container component (smart component)
@Component({
    selector: 'app-workouts',
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
