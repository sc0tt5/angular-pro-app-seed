import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FoodStoreConfig, FOOD_STORE_CONFIG } from './config';

@Injectable()
export class FoodStoreService {
    api: string;
    constructor(
        private http: HttpClient,
        @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig
    ) {
        this.api = `http://localhost:3000/`;
    }

    getStore() {
        const header = new HttpHeaders()
            .set('id', `${this.config.storeId}`)
            .set('token', `${this.config.storeToken}`);
        const request = new HttpRequest('GET', `${this.api}`, { header });

        return this.http.request(request).pipe(
            map(response => {
                console.log(response);
            }),
            catchError((error: any) => throwError(error))
        );
    }
}
