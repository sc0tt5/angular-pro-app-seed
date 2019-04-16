import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div>
            <pizza-viewer></pizza-viewer>
            <side-viewer></side-viewer>
            <drink-viewer></drink-viewer>
        </div>
    `
})
export class AppComponent {}
