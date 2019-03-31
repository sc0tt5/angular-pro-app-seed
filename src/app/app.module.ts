import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { MailModule } from './mail/mail.module';

export const ROUTES: Routes = [
    // we create a new path, but we reference the module so we can lazy load
    // we need to #DashboardModule in case there are multiple modules
    // and in the DashboardModule, we remove the path 'dashboard'
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        MailModule,
        /* removed DashboardModule so it doesn't load at runtime ...we will now lazy laod */
        RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
