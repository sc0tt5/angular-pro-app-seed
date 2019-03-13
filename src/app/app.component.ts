import { ChangeDetectionStrategy, Component } from '@angular/core';

// component decoration called "changeDetection"
// ChangeDetectionStrategy.Default -- default runs everytime we change something

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.Default,
    template: `
        <div>
            <button (click)="addProp()">Add property</button>
            <button (click)="changeUser()">Change user object</button>
            <button (click)="changeName()">Change name property</button>
            <div class="users">
                <example-one [user]="user"></example-one>
                <example-two [user]="user"></example-two>
            </div>
        </div>
    `
})

// component one uses Default
// component two uses OnPush
// ...otherwise these are identical
// the below methods with change prop, name, and the entire user to see how these differ
export class AppComponent {
    user: any = {
        name: 'Mark Hoppus',
        age: 44,
        location: 'California'
    };

    // clicking "Add property" adds to Default but not OnPush
    addProp() {
        this.user.email = 'blink@blink-182.net';
    }

    // clicking "Change name" only updates Default
    changeName() {
        this.user.name = 'Travis Barker';
    }

    changeUser() {
        this.user = {
            name: 'Tom Delonge',
            age: 41,
            location: 'California'
        };
    }

    // so if we use immutable data object angular does not have to check previous
    // which means angular will check much faster and doesn't have to check every property

    // the ChangeDetectionStrategy Default has to check every property which means it will be slower

    // the main idea is to use immutable data scructures along with ChangeDetectionStrategy OnPush
    // to make change detection and application code much faster
}
