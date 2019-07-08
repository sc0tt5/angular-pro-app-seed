import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// third-party modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule, Routes } from '@angular/router';
// shared modules
import { SharedModule } from './shared/shared.module';
// firebase config (private)
import { firebaseConfig } from '../../assets/firebaseconfig'; // see FirebaseAppConfig

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig), // see FirebaseAppConfig
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot() // forRoot to avoid a duplicate instance of AuthService (see shared module)
    ]
})
export class AuthModule {}
