import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class FoodService {
    api: string;
    // to inject a provider that we declared in app.module
    constructor(private http: HttpClient, private apiPath: string) {
        this.setApiUrl(apiPath);
        console.log(this.api);
    }

    setApiUrl(apiPath: string) {
        this.api = `http://localhost:3000/${apiPath}`;
    }

    getFood(): Observable<any[]> {
        return this.http.get<any>(this.api).pipe(
            map(response => response),
            catchError((error: any) => throwError(error))
        );
    }
}
