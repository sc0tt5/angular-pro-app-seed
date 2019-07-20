import { ChangeDetectionStrategy, Component } from '@angular/core';

// stateless component (typically will have ChangeDetectionStrategy.OnPush)
@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-nav.component.scss'],
    templateUrl: './app-nav.component.html'
})
export class AppNavComponent {
    constructor() {}
}
