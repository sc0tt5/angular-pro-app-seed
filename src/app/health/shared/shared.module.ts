import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule } from '@angular/router';
import { JoinPipe, WorkoutPipe } from '@health/shared/pipes';
import { MealsService, WorkoutsService } from '@health/shared/services';
import { ListItemComponent } from './list-item/list-item.component';

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
