import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';
import { AuthService, User } from './auth/shared/services/auth.service';

// container component (smart component)
@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div>
            <h1>{{ user$ | async | json }}</h1>
            <div class="wrapper">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit, OnDestroy {
    user$: Observable<User>;
    subscription: Subscription;

    constructor(private store: Store, private authService: AuthService) {}

    ngOnInit() {
        this.subscription = this.authService.auth$.subscribe(); // init the data flow via subscribe (observable)
        this.user$ = this.store.select<User>('user');
    }
    ngOnDestroy() {
        this.subscription.unsubscribe(); // just in case the app component gets destroyed (good practice)
    }
}
