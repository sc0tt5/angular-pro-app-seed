import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/pluck';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { State } from './state';

const state: State = {
    playlist: undefined
};

/*
  store.set('todos', [{},{}])
  store.select('todos')
*/
export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.pipe(distinctUntilChanged());

    // store.value
    get value() {
        return this.subject.value;
    }

    // store.select<Todo[]>('todos')
    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    // store.set('todos', [{},{}])
    // tslint:disable-next-line: no-shadowed-variable
    set(name: string, state: any) {
        this.subject.next({
            ...this.value,
            [name]: state
        });
    }
}
