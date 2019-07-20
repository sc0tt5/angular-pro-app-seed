import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Meal } from '@core/models';
import { ScheduleItem } from '@core/models';
import { User } from '@core/models';
import { Workout } from '@core/models';

export interface State {
    user: User;
    meals: Meal[];
    selected: any;
    list: any;
    schedule: ScheduleItem[];
    date: Date;
    workouts: Workout[];
    [key: string]: any;
}

const state: State = {
    user: undefined,
    meals: undefined,
    selected: undefined,
    list: undefined,
    schedule: undefined,
    date: undefined,
    workouts: undefined
};

export class Store {
    private subject = new BehaviorSubject<State>(state);
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
