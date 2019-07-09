import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Store } from 'store';
// presentational components
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavComponent } from './app-nav/app-nav.component';
// container components
import { AppComponent } from './app.component';
// feature modules
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';

// routes
export const ROUTES: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'schedule' }];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule, HealthModule],
    declarations: [AppComponent, AppHeaderComponent, AppNavComponent],
    providers: [Store],
    bootstrap: [AppComponent]
})
export class AppModule {}
