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

// routes
export const ROUTES: Routes = [];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
    declarations: [AppComponent, AppHeaderComponent, AppNavComponent],
    providers: [Store],
    bootstrap: [AppComponent]
})
export class AppModule {}
