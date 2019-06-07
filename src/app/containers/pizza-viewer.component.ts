import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';

interface Pizza {
    name: string;
    price: number;
}

@Component({
    selector: 'pizza-viewer',
    providers: [FoodService],
    template: `
        <div>
            <div *ngFor="let item of items$ | async">
                {{ item.name }} {{ item.price | currency: 'USD':true }}
            </div>
        </div>
    `
})
export class PizzaViewerComponent implements OnInit {
    items$: Observable<Pizza[]>;
    constructor(private foodService: FoodService) {}
    ngOnInit() {
        this.items$ = this.foodService.getPizzas();
    }
}
