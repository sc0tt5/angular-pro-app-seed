import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Store } from 'store';
// containers
import { AppComponent } from './app.component';
// feature modules
import { AuthModule } from './auth/auth.module';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
    declarations: [AppComponent],
    providers: [Store],
    bootstrap: [AppComponent]
})
export class AppModule {}
