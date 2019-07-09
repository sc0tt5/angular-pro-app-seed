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
        .list(`meals/${this.uid}`)
        .valueChanges() // TODO: fix for Fire 5+ .........stopped 7:30 Data layer, initiate Observable streams
        .pipe(tap((next: Meal[]) => this.store.set('meals', next)));

    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {}

    get uid() {
        return this.authService.user.uid;
    }
}
