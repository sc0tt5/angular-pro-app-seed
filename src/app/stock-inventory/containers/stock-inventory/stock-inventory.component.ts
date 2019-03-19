import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'stock-inventory',
    styleUrls: ['stock-inventory.component.scss'],
    template: `
        <div class="stock-inventory">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <div formGroupName="store">
                    <input type="text" placeholder="Branch Id" formControlName="branch" />
                    <input type="text" placeholder="Manager Code" formControlName="code" />
                </div>

                <div class="stock-inventory__buttons">
                    <button type="submit" [disabled]="form.valid">Order stock</button>
                </div>

                <pre>{{ form.value | json }}</pre>
            </form>
        </div>
    `
})
export class StockInventoryComponent {
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl('B182'),
            code: new FormControl('1234')
        })
    });

    onSubmit() {
        console.log('Submit:', this.form.value);
    }
}
