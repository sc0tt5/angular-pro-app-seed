import { Injectable } from '@angular/core';
import { CanLoad, CanActivateChild } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivateChild {
    constructor(private authService: AuthService) {}

    canLoad() {
        return this.authService.checkPermissions(); // returns observable to canLoad
    }

    canActivate() {
        return this.authService.isLoggedIn();
    }
    canActivateChild() {
        return false;
    }
}
