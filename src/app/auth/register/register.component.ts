import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

// container component (smart component)
@Component({
    selector: 'auth-register',
    templateUrl: './register.component.html'
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
