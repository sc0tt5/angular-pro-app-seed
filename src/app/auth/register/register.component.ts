import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

// container component (smart component)
@Component({
    selector: 'auth-register',
    template: `
        <div>
            <auth-form (submitted)="registerUser($event)">
                <h1>Register</h1>
                <a routerLink="/auth/login">Already have an account?</a>
                <button type="submit">
                    Create account
                </button>
                <div class="error" *ngIf="error">
                    {{ error }}
                </div>
            </auth-form>
        </div>
    `
})
export class RegisterComponent {
    error: string;

    // because this is a container component we will DI AuthService here
    constructor(private authService: AuthService, private router: Router) {}

    async registerUser(event: FormGroup) {
        const { email, password } = event.value;
        try {
            await this.authService.createUser(email, password);
            // because "await" will let us do stuff when complete, we can treat everything below like .then
            this.router.navigate(['/']); // when successfull redirect to somewhere
        } catch (err) {
            this.error = err.message;
        }
    }
}
