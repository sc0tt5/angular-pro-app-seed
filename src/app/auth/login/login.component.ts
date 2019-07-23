// import { initialAuthState } from '@store/state';
import { AuthAction } from '@store/actions';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../shared/services/auth.service';
import { Store } from '@ngrx/store'; // select
import { User } from '@core/models';

// container component (smart component)
@Component({
    selector: 'auth-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    error: string;
    // success$ = this.store.pipe(select(AuthAction.loginUserSuccess));
    // error$ = this.store.pipe(select(AuthAction.loginUserFail));

    // because this is a container component we will DI AuthService here
    constructor(
        // private authService: AuthService,
        private router: Router,
        private store: Store<User>
    ) {}

    async loginUser(event: FormGroup) {
        // const { email, password } = event.value;
        const user = event.value;
        try {
            // testing new store...
            console.log('user:::', user);

            await this.store.dispatch(AuthAction.loginUser(user));

            // FIXME: see app module...trying to get redux dev tools to work
            // TODO: then, need to wireup ngrx/store to fetch authState from fb (move that authService call to a store call...)

            // await this.authService.loginUser(email, password);
            // because "await" will let us do stuff when complete, we can treat everything below like .then
            this.router.navigate(['/']); // when successfull redirect to somewhere
        } catch (err) {
            console.log('error:::', err);
            // this.error = err.message;
        }
    }
}
