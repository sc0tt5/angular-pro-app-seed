import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class FoodService {
    // to inject a provider that we declared in app.module
    constructor(private http: HttpClient, @Inject('api') private api: string) {}

    getFood(): Observable<any[]> {
        return this.http.get<any>(this.api).pipe(
            map(response => response),
            catchError((error: any) => throwError(error))
        );
    }
}
