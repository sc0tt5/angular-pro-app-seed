import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
// components
import { MealFormComponent } from './meal/meal-form/meal-form.component';
// containers
import { MealComponent } from './meal/meal.component';
import { MealsComponent } from './meals/meals.component';

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
