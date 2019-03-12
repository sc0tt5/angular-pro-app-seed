import { Component } from '@angular/core';

@Component({
    selector: 'example-one',
    // this is used to emulate a shadow dom and is actually a default, so not needed to specifiy
    // encapsulation: ViewEncapsulation.Emulated,
    styles: [
        `
            .example-one {
                background: #9f72e6;
                font-size: 19px;
                color: #fff;
                margin-bottom: 50px;
                padding: 10px 20px;
            }
        `
    ],
    template: `
        <div class="example-one">
            Example One
        </div>
    `
})
export class ExampleOneComponent {}
