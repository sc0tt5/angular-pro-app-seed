import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
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
        .snapshotChanges()
        .pipe(
            tap((payload: any) => {
                const mealsArray = [];

                payload.forEach(p => {
                    const data = p.payload.val();
                    mealsArray.push({
                        name: data.name,
                        ingredients: data.ingredients,
                        $key: p.payload.key
                    });
                });

                this.store.set('meals', mealsArray);
            })
        );

    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {}

    get uid() {
        return this.authService.user.uid;
    }

    getMeal(key: string) {
        if (!key) {
            return of({});
        }
        return this.store.select<Meal[]>('meals').pipe(
            filter(Boolean),
            map(meals => meals.find((meal: Meal) => meal.$key === key))
        );
    }

    addMeal(meal: Meal) {
        return this.db.list(`meals/${this.uid}`).push(meal);
    }

    updateMeal(key: string, meal: Meal) {
        return this.db.object(`meals/${this.uid}/${key}`).update(meal);
    }

    removeMeal(key: string) {
        return this.db.list(`meals/${this.uid}`).remove(key);
    }
}
