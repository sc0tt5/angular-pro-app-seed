import { Injectable } from '@angular/core';
import { AuthService } from '@auth/shared/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthAction } from '@store/actions';
// import { of } from 'rxjs';
// import { catchError, map, switchMap, tap, mergeMap } from 'rxjs/operators';
import { map, catchError, mergeMap } from 'rxjs/operators'; // tap
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) {}

    // SEE: https://angularfirebase.com/lessons/firebase-with-angular-ngrx-redux/
    // SEE: https://ngrx.io/guide/effects
    loginUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthAction.loginUser),
            map(payload => payload),
            mergeMap(payload => this.authService.loginUser(payload.email, payload.password)),
            map(response => {
                // user object for store state
                const user = {
                    email: response.user.email,
                    uid: response.user.uid,
                    authenticated: !!response.user.uid
                };
                return AuthAction.loginUserSuccess({ user });
            }),
            catchError(error => of(AuthAction.loginUserFail(error)))
        )
    );
}
