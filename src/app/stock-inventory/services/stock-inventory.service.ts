import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product, Item } from './../models/product.interface';

export const api = 'http://localhost:3000';

@Injectable()
export class StockInventoryService {
    constructor(private http: HttpClient) {}

    getCartItems(): Observable<Item[]> {
        return this.http.get<Item[]>(`${api}/cart`).pipe(
            map(response => response),
            catchError((error: any) => throwError(error))
        );
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${api}/products`).pipe(
            map(response => response),
            catchError((error: any) => throwError(error))
        );
    }
}
