import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { AppState } from '@core/models';

const state: AppState = {
    user: undefined,
    meals: undefined,
    selected: undefined,
    list: undefined,
    schedule: undefined,
    date: undefined,
    workouts: undefined
};

export class Store {
    private subject = new BehaviorSubject<AppState>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    // tslint:disable-next-line: no-shadowed-variable
    set(name: string, state: any) {
        this.subject.next({ ...this.value, [name]: state });
    }
}
