import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutPipe } from './pipes/workout.pipe';
import { MealsService } from './services/meals.service';
import { WorkoutsService } from './services/workouts.service';

@NgModule({
    imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
    declarations: [ListItemComponent, JoinPipe, WorkoutPipe],
    exports: [ListItemComponent, JoinPipe, WorkoutPipe]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [MealsService, WorkoutsService]
        };
    }
}
