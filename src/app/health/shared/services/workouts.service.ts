import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/shared/services/auth.service';
import { Store } from 'store';

export interface Workout {
    name: string;
    type: string;
    strength: any;
    endurance: any;
    timestamp: number;
    $key: string;
    $exists: () => boolean;
}

@Injectable()
export class WorkoutsService {
    workouts$: Observable<Workout[]> = this.db
        .list(`workouts/${this.uid}`)
        .snapshotChanges()
        .pipe(
            tap((payload: any) => {
                const workoutsArray = [];

                payload.forEach(p => {
                    const data = p.payload.val();
                    workoutsArray.push({
                        name: data.name,
                        strength: data.strength,
                        endurance: data.endurance,
                        $key: p.payload.key
                    });
                });

                this.store.set('workouts', workoutsArray);
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

    getWorkout(key: string) {
        if (!key) {
            return of({});
        }
        return this.store.select<Workout[]>('workouts').pipe(
            filter(Boolean),
            map(workouts => workouts.find((workout: Workout) => workout.$key === key))
        );
    }

    addWorkout(workout: Workout) {
        return this.db.list(`workouts/${this.uid}`).push(workout);
    }

    updateWorkout(key: string, workout: Workout) {
        return this.db.object(`workouts/${this.uid}/${key}`).update(workout);
    }

    removeWorkout(key: string) {
        return this.db.list(`workouts/${this.uid}`).remove(key);
    }
}
