import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// we will use the ControlValueAccessor to extend our component to talk to form groups
const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR, // gains access to the existing value accessor
    // forwardRef makes sure the component is available
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(() => StockCounterComponent), // which component to use to control user access
    multi: true
};

@Component({
    selector: 'stock-counter',
    providers: [COUNTER_CONTROL_ACCESSOR],
    styleUrls: ['./stock-counter.component.scss'],
    template: `
        <div class="stock-counter" [class.focused]="focus">
            <div>
                <div
                    tabindex="0"
                    (keydown)="onKeyDown($event)"
                    (blur)="onBlur($event)"
                    (focus)="onFocus($event)"
                >
                    <p>{{ value }}</p>
                    <div>
                        <button
                            type="button"
                            (click)="increment()"
                            [disabled]="value === max"
                        >
                            +
                        </button>
                        <button
                            type="button"
                            (click)="decrement()"
                            [disabled]="value === min"
                        >
                            -
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class StockCounterComponent implements ControlValueAccessor {
    @Input() step: number = 10;
    @Input() min: number = 10;
    @Input() max: number = 1000;

    value: number = 10;

    focus: boolean = false;

    // private methods for registerOnTouch and registerOnChange
    // we wrap them and store them internally
    // tslint:disable-next-line: ban-types
    private onTouch: Function;
    // tslint:disable-next-line: ban-types
    private onModelChange: Function;

    // like when implementing ngOnInit, we have to impement the ControlValueAccessor interface
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }

    writeValue(value) {
        this.value = value || 0;
    }

    // wire up arrow up/down keys
    onKeyDown(event: KeyboardEvent) {
        const handlers = {
            ArrowDown: () => this.decrement(),
            ArrowUp: () => this.increment()
        };

        if (handlers[event.code]) {
            handlers[event.code]();
            event.preventDefault();
            event.stopPropagation();
        }
        this.onTouch();
    }

    onBlur(event: FocusEvent) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }

    onFocus(event: FocusEvent) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.onTouch();
    }

    // increment and decrement buttons
    increment() {
        if (this.value < this.max) {
            this.value = this.value + this.step;
            this.onModelChange(this.value); // this will update the json value
        }
        this.onTouch(); // notify the control has changed
    }

    decrement() {
        if (this.value > this.min) {
            this.value = this.value - this.step;
            this.onModelChange(this.value); // this will update the json value
        }
        this.onTouch(); // notify the control has changed
    }
}
