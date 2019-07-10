import { Component } from '@angular/core';
import { Meal } from '../../shared/services/meals.service';

@Component({
    selector: 'health-meal',
    styleUrls: ['meal.component.scss'],
    template: `
        <div class="meal">
            <div class="meal__title">
                <h1>
                    <img src="/assets/img/food.svg" />
                    <span>Create meal</span>
                </h1>
            </div>
            <div>
                <health-meal-form (create)="addMeal($event)"> </health-meal-form>
            </div>
        </div>
    `
})
export class MealComponent {
    constructor() {}

    addMeal(event: Meal) {
        console.log('Meal:', event);
    }
}
