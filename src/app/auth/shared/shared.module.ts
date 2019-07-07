import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// components
import { AuthFormComponent } from './auth-form/auth-form.component';
// services
import { AuthService } from './services/auth.service';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [AuthFormComponent],
    exports: [AuthFormComponent]
})
export class SharedModule {
    // forRoot to prevent multiple instances of AuthService
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [AuthService]
        };
    }
}
