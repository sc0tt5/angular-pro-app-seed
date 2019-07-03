import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

// container component
@Component({
    selector: 'auth-login',
    template: `
        <div>
            <!-- auth form emits and event called ssubmitted, will listen to this and use callback -->
            <auth-form (submitted)="loginUser($event)">
                <!-- content projection -- h1, a, and button -->
                <h1>Login</h1>
                <a routerLink="/auth/register">Not registered?</a>
                <button type="submit">
                    Login
                </button>
            </auth-form>
        </div>
    `
})
export class LoginComponent {
    constructor() {}

    loginUser(event: FormGroup) {
        console.log(event.value);
    }
}
