import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { FoodStoreConfig, FOOD_STORE_CONFIG } from './config';
import { FoodStoreService } from './food-store.service';

export const FOOD_PROVIDERS: Provider[] = [FoodStoreService];

@NgModule({
    imports: [CommonModule, HttpClientModule]
})
export class FoodStoreModule {
    static forRoot(config: FoodStoreConfig): ModuleWithProviders {
        return {
            ngModule: FoodStoreModule,
            providers: [
                FOOD_PROVIDERS,
                {
                    provide: FOOD_STORE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
