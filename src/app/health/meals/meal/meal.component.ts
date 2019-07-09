import { Component } from '@angular/core';

// container component (smart component)
@Component({
    selector: 'health-meal',
    styleUrls: ['meal.component.scss'],
    template: `
        <div class="meal">
            I am a meal!
        </div>
    `
})
export class MealComponent {
    constructor() {}
}
