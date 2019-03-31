import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route, Routes, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';
import { MailModule } from './mail/mail.module';

export class CustomPreload implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return route.data && route.data.preload ? fn() : of(null);
    }
}

export const ROUTES: Routes = [
    // we create a new path, but we reference the module so we can lazy load
    // we need to #DashboardModule in case there are multiple modules
    // and in the DashboardModule, we remove the path 'dashboard'
    {
        path: 'dashboard',
        data: { preload: true }, // use our CustomPreload
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
    declarations: [AppComponent],
    providers: [CustomPreload],
    imports: [
        BrowserModule,
        HttpClientModule,
        MailModule,
        /* removed DashboardModule so it doesn't load at runtime ...we will now lazy laod */
        RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload }) // preload everything
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
