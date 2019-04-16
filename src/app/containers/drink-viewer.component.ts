import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

interface Drink {
    name: string;
    price: number;
}

export function DrinkFactory(http: HttpClient) {
    return new FoodService(http, 'http://localhost:3000/drinks');
}

@Component({
    selector: 'drink-viewer',
    providers: [
        {
            provide: FoodService,
            useFactory: DrinkFactory,
            deps: [HttpClient]
        }
    ],
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
