import { Directive, HostListener } from '@angular/core';

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
    /**
     * the host is the element that we have bound the directive to
     * in this case, the input has the directive/attribute credit-card
     */
    @HostListener('input', ['$event'])
    onkeydown(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement;

        let trimmed = input.value.replace(/\s+/g, '');
        if (trimmed.length > 16) {
            trimmed = trimmed.substr(0, 16);
        }

        const numbers: any[] = [];
        for (let i = 0; i < trimmed.length; i += 4) {
            numbers.push(trimmed.substr(i, 4));
        }

        // ['1234', '1234', ...]
        input.value = numbers.join(' ');
    }
}
