import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <ng-container [ngTemplateOutlet]="tmpl"> </ng-container>
            <ng-template #tmpl>
                Todd Motto : England, UK
            </ng-template>
        </div>
    `
})
export class AppComponent {}
