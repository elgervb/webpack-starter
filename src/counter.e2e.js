/* global describe, it, expect, browser */

describe('counter setup', () => {
    let display, decrement, increment;

    it('should have a page title', () => {
        browser.url('/counter.html');
        const title = browser.getTitle();
        expect(title).toBe('Webpack counter');
    });

    it('should have counter elements on page', () => {
        browser.element('.counter');
        display = browser.element('.counter__display');
        browser.element('.counter__action');

        decrement = browser.element('.counter__action--decrement');
        increment = browser.element('.counter__action--increment');

        expect(decrement).toBeDefined();
        expect(increment).toBeDefined();
    });

    it('should have a display', () => {
        expect(display.getText()).toBe('0');
    });

    describe('counter interaction', () => {
        it('should increment', () => {
            increment.click();
            expect(display.getText()).toBe('1');
        });

        it('should decrement', () => {
            increment.click();
            expect(display.getText()).toBe('2');

            decrement.click();
            expect(display.getText()).toBe('1');
        });
    });
});
