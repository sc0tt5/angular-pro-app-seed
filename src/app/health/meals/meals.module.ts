import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MealComponent, MealFormComponent, MealsComponent } from '@health/meals';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
    { path: '', component: MealsComponent },
    { path: 'new', component: MealComponent },
    { path: ':id', component: MealComponent }
];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES), SharedModule],
    declarations: [MealsComponent, MealComponent, MealFormComponent]
})
export class MealsModule {}
