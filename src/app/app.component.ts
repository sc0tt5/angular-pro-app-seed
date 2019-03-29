import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    constructor(private router: Router) {}
    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
                console.log(event);
            });
    }
}
