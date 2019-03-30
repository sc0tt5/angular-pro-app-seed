import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <header>
                <img src="/assets/img/logo.svg" />
            </header>
            <div class="app__content">
                <nav>
                    <a
                        [routerLink]="[
                            { outlets: { primary: 'folder/inbox', pane: null } }
                        ]"
                        routerLinkActive="active"
                    >
                        Inbox
                    </a>
                    <a
                        [routerLink]="[
                            { outlets: { primary: 'folder/trash', pane: null } }
                        ]"
                        routerLinkActive="active"
                    >
                        Trash
                    </a>
                </nav>
                <mail-app></mail-app>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
