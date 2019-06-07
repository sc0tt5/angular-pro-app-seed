import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class FoodService {
    api: string;
    // to inject a provider that we declared in app.module
    constructor(private http: HttpClient) {
        this.api = `http://localhost:3000/`;
    }

    getFood(): Observable<any[]> {
        return this.http.get<any>(this.api).pipe(
            map(response => response),
            catchError((error: any) => throwError(error))
        );
    }

    getSides(): Observable<any[]> {
        return this.http.get<any[]>(`${this.api}sides`).pipe(
            map(response => response),
            catchError((error: any) => throwError(error))
        );
    }
    getPizzas(): Observable<any[]> {
        return this.http.get<any[]>(`${this.api}pizzas`).pipe(
            map(response => response),
            catchError((error: any) => throwError(error))
        );
    }
    getDrinks(): Observable<any[]> {
        return this.http.get<any[]>(`${this.api}drinks`).pipe(
            map(response => response),
            catchError((error: any) => throwError(error))
        );
    }
}
