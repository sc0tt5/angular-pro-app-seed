import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product, Item, Branch } from './../models/product.interface';

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

    checkBranchId(id: string): Observable<boolean> {
        const search = new HttpParams();
        search.set('id', id);

        return this.http.get<Branch[]>(`${api}/branches`, { params: search }).pipe(
            map(response => response),
            map(response => !!response.length),
            catchError((error: any) => throwError(error))
        );
    }
}
