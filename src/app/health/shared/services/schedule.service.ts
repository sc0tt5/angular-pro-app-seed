import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from 'store';

@Injectable()
export class ScheduleService {
    // BehaviorSubject allows to initialize date$ with some data, could be any data
    private date$ = new BehaviorSubject(new Date());

    // set date for schedule
    schedule$: Observable<any[]> = this.date$.pipe(
        tap((next: any) => this.store.set('date', next))
    );

    constructor(private store: Store) {}
}
