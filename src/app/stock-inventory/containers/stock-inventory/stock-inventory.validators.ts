import { AbstractControl } from '@angular/forms';

export class StockValidators {
    static checkBranch(control: AbstractControl) {
        // A123
        const regexp = /^[a-z]\d{3}$/i;
        const valid = regexp.test(control.value);
        return valid ? null : { invalidBranch: true };
    }
}
