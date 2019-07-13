import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleService } from '../shared/services/schedule.service';
import { ScheduleCalendarComponent } from './schedule/schedule-calendar/schedule-calendar.component';
import { ScheduleControlsComponent } from './schedule/schedule-calendar/schedule-controls/schedule-controls.component';
import { ScheduleDaysComponent } from './schedule/schedule-calendar/schedule-days/schedule-days.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const ROUTES: Routes = [{ path: '', component: ScheduleComponent }];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES)],
    declarations: [
        ScheduleComponent,
        ScheduleCalendarComponent,
        ScheduleDaysComponent,
        ScheduleControlsComponent
    ],
    providers: [ScheduleService]
})
export class ScheduleModule {}
