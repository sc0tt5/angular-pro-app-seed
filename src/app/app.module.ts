import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DrinkViewerComponent } from './containers/drink-viewer.component';
import { PizzaViewerComponent } from './containers/pizza-viewer.component';
import { SideViewerComponent } from './containers/side-viewer.component';

@NgModule({
    declarations: [
        AppComponent,
        PizzaViewerComponent,
        DrinkViewerComponent,
        SideViewerComponent
    ],
    imports: [BrowserModule, HttpClientModule],
    bootstrap: [AppComponent],
    providers: [{ provide: 'api', useValue: '/api/pizzas' }]
})
export class AppModule {}
