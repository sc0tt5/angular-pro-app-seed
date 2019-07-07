import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule], // do not need to call forRoot, doing this in auth module
    declarations: [LoginComponent]
})
export class LoginModule {}
