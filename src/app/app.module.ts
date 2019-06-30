import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Store } from 'store';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
    providers: [Store],
    bootstrap: [AppComponent]
})
export class AppModule {}
