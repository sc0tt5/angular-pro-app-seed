import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { Store } from 'store';

export interface Meal {
    name: string;
    ingredients: string[];
    timestamp: number;
    $key: string;
    $exists: () => boolean;
}

@Injectable()
export class MealsService {
    meals$: Observable<Meal[]> = this.db
        .list<Meal>(`meals/${this.uid}`)
        .valueChanges()
        .pipe(tap(next => this.store.set('meals', next)));

    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {}

    get uid() {
        return this.authService.user.uid;
    }
}
