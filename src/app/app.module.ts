import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FoodStoreModule } from './food-store/food-store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FoodStoreModule.forRoot({ storeId: 10292, storeToken: 'eca938c99a0e9ff91029dc' })
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {}
