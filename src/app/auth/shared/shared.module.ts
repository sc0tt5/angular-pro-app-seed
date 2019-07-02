import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [AuthFormComponent],
    exports: [AuthFormComponent]
})
export class SharedModule {}
