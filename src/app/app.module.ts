import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from '@auth/auth.module';
import { HealthModule } from '@health/health.module';
import { AppHeaderComponent } from '@shared/app-header/app-header.component';
import { AppNavComponent } from '@shared/app-nav/app-nav.component';
import { effects } from '@store/effects';
import { reducer } from '@store/reducers/auth.reducer';
import { Store } from '@store/store';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

// routes
export const ROUTES: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'schedule' }];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        AuthModule,
        HealthModule,
        StoreModule.forRoot(reducer), // reducers here = router reducers
        EffectsModule.forRoot(effects),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    declarations: [AppComponent, AppHeaderComponent, AppNavComponent],
    providers: [Store],
    bootstrap: [AppComponent]
})
export class AppModule {}
