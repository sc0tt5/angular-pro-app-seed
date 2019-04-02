import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

export const ROUTES: Routes = [
    {
        path: 'dashboard',
        canLoad: [AuthGuard],
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        MailModule,
        AuthModule,
        RouterModule.forRoot(ROUTES)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
