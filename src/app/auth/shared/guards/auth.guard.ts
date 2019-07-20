import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '@auth/shared/services';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate() {
        return this.authService.authState.pipe(
            map(user => {
                // if user not logged in then redirect to login page
                if (!user) {
                    this.router.navigate(['/auth/login']);
                }
                return !!user; // return boolean for canActivate
            })
        );
    }
}
