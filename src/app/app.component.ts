import {
    Component,
    TemplateRef,
    ViewContainerRef,
    ViewChild,
    AfterContentInit
} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <div #entry></div>
            <ng-template #tmpl let-name let-location="location">
                {{ name }} : {{ location }}
            </ng-template>
        </div>
    `
})
export class AppComponent implements AfterContentInit {
    @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
    @ViewChild('tmpl') tmpl: TemplateRef<any>;

    ngAfterContentInit() {
        this.entry.createEmbeddedView(this.tmpl, {
            $implicit: 'Motto Todd',
            location: 'UK, England'
        });
    }
}
