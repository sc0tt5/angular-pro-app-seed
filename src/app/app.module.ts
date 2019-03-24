import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [{ path: '**', redirectTo: 'folder/inbox' }];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, MailModule, RouterModule.forRoot(ROUTES)],
    bootstrap: [AppComponent]
})
export class AppModule {}
