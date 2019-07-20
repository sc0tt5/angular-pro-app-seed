import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
    ScheduleAssignComponent,
    ScheduleCalendarComponent,
    ScheduleComponent,
    ScheduleControlsComponent,
    ScheduleDaysComponent,
    ScheduleSectionComponent
} from '@health/schedule';
import { ScheduleService } from '@health/shared/services';
import { SharedModule } from '../shared/shared.module';

export const ROUTES: Routes = [{ path: '', component: ScheduleComponent }];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES), SharedModule],
    declarations: [
        ScheduleComponent,
        ScheduleCalendarComponent,
        ScheduleDaysComponent,
        ScheduleControlsComponent,
        ScheduleSectionComponent,
        ScheduleAssignComponent
    ],
    providers: [ScheduleService]
})
export class ScheduleModule {}
