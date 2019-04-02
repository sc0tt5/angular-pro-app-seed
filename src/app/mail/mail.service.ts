import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Mail } from './models/mail.interface';

export const api = 'http://localhost:3000';

@Injectable()
export class MailService {
    constructor(private http: HttpClient) {}

    getFolder(folder: string): Observable<Mail[]> {
        return this.http
            .get<Mail[]>(`${api}/messages?folder=${folder}`)
            .pipe(catchError((error: any) => throwError(error.json())));
    }

    getMessage(id: string): Observable<Mail> {
        return this.http
            .get<Mail>(`${api}/messages/${id}`)
            .pipe(catchError((error: any) => throwError(error.json())));
    }
}
