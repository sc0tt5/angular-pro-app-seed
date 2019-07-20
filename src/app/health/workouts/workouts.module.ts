import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// prettier-ignore
import { WorkoutComponent, WorkoutFormComponent, WorkoutsComponent, WorkoutTypeComponent } from '@health/workouts';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [
    { path: '', component: WorkoutsComponent },
    { path: 'new', component: WorkoutComponent },
    { path: ':id', component: WorkoutComponent }
];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES), SharedModule],
    declarations: [WorkoutsComponent, WorkoutComponent, WorkoutFormComponent, WorkoutTypeComponent]
})
export class WorkoutsModule {}
