import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

interface Drink {
    name: string;
    price: number;
}

@Component({
    selector: 'drink-viewer',
    providers: [{ provide: FoodService, useClass: FoodService }],
    template: `
        <div>
            <div *ngFor="let item of (items$ | async)">
                {{ item.name }} {{ item.price | currency: 'USD':'symbol' }}
            </div>
        </div>
    `
})
export class DrinkViewerComponent implements OnInit {
    items$: Observable<Drink[]>;
    constructor(private foodService: FoodService) {}
    ngOnInit() {
        this.items$ = this.foodService.getFood();
    }
}
