import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

// container component (smart component)
@Component({
    selector: 'auth-login',
    template: `
        <div>
            <auth-form (submitted)="loginUser($event)">
                <h1>Login</h1>
                <a routerLink="/auth/register">Not registered?</a>
                <button type="submit">
                    Login
                </button>
                <div class="error" *ngIf="error">
                    {{ error }}
                </div>
            </auth-form>
        </div>
    `
})
export class LoginComponent {
    error: string;

    // because this is a container component we will DI AuthService here
    constructor(private authService: AuthService, private router: Router) {}

    async loginUser(event: FormGroup) {
        const { email, password } = event.value;
        try {
            await this.authService.loginUser(email, password);
            // because "await" will let us do stuff when complete, we can treat everything below like .then
            this.router.navigate(['/']); // when successfull redirect to somewhere
        } catch (err) {
            this.error = err.message;
        }
    }
}
