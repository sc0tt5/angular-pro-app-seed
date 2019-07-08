import { Component } from '@angular/core';

// container component (smart component)
@Component({
    selector: 'health-meals',
    styleUrls: ['meals.component.scss'],
    template: `
        <div>
            Meals
        </div>
    `
})
export class MealsComponent {
    constructor() {}
}
