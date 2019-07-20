import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Meal } from '@core/models';
import { MealsService } from '@health/shared/services';

@Component({
    selector: 'health-meal',
    styleUrls: ['meal.component.scss'],
    templateUrl: './meal.component.html'
})
export class MealComponent implements OnInit, OnDestroy {
    meal$: Observable<Meal>;
    subscription: Subscription;

    constructor(
        private mealsService: MealsService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.subscription = this.mealsService.meals$.subscribe();
        this.meal$ = this.route.params.pipe(
            switchMap(param => this.mealsService.getMeal(param.id))
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    async addMeal(event: Meal) {
        await this.mealsService.addMeal(event);
        this.backToMeals();
    }

    async updateMeal(event: Meal) {
        const key = this.route.snapshot.params.id;
        await this.mealsService.updateMeal(key, event);
        this.backToMeals();
    }

    async removeMeal() {
        const key = this.route.snapshot.params.id;
        await this.mealsService.removeMeal(key);
        this.backToMeals();
    }

    backToMeals() {
        this.router.navigate(['meals']);
    }
}
