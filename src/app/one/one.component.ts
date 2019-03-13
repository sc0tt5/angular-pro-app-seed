import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// ChangeDetectionStrategy.OnPush

@Component({
    selector: 'example-one',
    changeDetection: ChangeDetectionStrategy.OnPush, // great for speeding up app with stateless/presentational/dumb components
    styles: [
        `
            .example-one {
                font-size: 19px;
                margin-bottom: 10px;
            }
        `
    ],
    template: `
        <div class="example-one">
            <h4>{{ user.name }}</h4>
            <h5>{{ user.age }} years old</h5>
            {{ user.location }} <br />
            {{ user.email }}

            <button (click)="update()">Internal update</button>
            <p>* should not update</p>
        </div>
    `
})
export class ExampleOneComponent {
    @Input()
    user;
    // because of ChangeDetectionStrategy OnPush, user is expecting a brand new object
    // and therefore will not update if only a property changes

    update() {
        this.user.name = 'Matt Skiba';
    }
}
