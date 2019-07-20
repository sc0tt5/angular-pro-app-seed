import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '@auth/shared/services';
import { User } from '@core/models';
import { Store } from '@store/store';

// container component (smart component)
@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    user$: Observable<User>;
    subscription: Subscription;

    constructor(private store: Store, private router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.subscription = this.authService.auth$.subscribe(); // init the data flow via subscribe (observable)
        this.user$ = this.store.select<User>('user');
    }

    ngOnDestroy() {
        this.subscription.unsubscribe(); // just in case the app component gets destroyed (good practice)
    }

    async onLogout() {
        await this.authService.logoutUser();
        this.router.navigate(['/auth/login']);
    }
}
