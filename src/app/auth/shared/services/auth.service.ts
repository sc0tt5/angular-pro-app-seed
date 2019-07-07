import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { tap } from 'rxjs/operators';
import { Store } from 'store';

export interface User {
    email: string;
    uid: string;
    authenticated: boolean;
}

@Injectable()
export class AuthService {
    // use fire auth state to check
    auth$ = this.af.authState.pipe(
        tap(next => {
            if (!next) {
                this.store.set('user', null);
                return; // exit here if no user
            }
            const user: User = {
                email: next.email,
                uid: next.uid,
                authenticated: true
            };
            this.store.set('user', user);
        })
    );

    constructor(private store: Store, private af: AngularFireAuth) {}

    // returns a promise, so can call .then or use async await
    createUser(email: string, password: string) {
        return this.af.auth.createUserWithEmailAndPassword(email, password);
    }

    // returns a promise, so can call .then or use async await
    loginUser(email: string, password: string) {
        return this.af.auth.signInWithEmailAndPassword(email, password);
    }
}
