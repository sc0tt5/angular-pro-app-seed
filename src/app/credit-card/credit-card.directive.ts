import { Directive, ElementRef } from '@angular/core';

/**
 * a component is basically a directive, but it has a template
 * directives do not have templates, but can use the same life-cycle
 * hooks as components
 */

@Directive({
    selector: '[credit-card]'
})
/**
 * ^ same as component, we have a selector, but directives are typically attributes
 * like <div credit-card></div>, so we will use a JS selector (square brackets) to
 * wrap [credit-card]
 *
 */
export class CreditCardDirective {
    // inject element as type ElementRef into constructor
    constructor(private element: ElementRef) {
        console.log(this.element);
    }
}
