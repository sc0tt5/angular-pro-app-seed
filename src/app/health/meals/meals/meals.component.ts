import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Meal } from '@core/models';
import { Store } from '@store/store';
import { MealsService } from '@health/shared/services';

// container component (smart component)
@Component({
    selector: 'health-meals',
    styleUrls: ['meals.component.scss'],
    templateUrl: './meals.component.html'
})
export class MealsComponent implements OnInit, OnDestroy {
    meals$: Observable<Meal[]>;
    subscription: Subscription;

    constructor(private store: Store, private mealsService: MealsService) {}

    ngOnInit() {
        this.meals$ = this.store.select<Meal[]>('meals');
        this.subscription = this.mealsService.meals$.subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    removeMeal(event: Meal) {
        this.mealsService.removeMeal(event.$key);
    }
}
