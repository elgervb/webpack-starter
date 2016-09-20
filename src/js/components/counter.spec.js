/* global describe, it, expect, beforeEach */
import Counter from './counter.js';

describe('counter.js', () => {
    let counter;
    
    beforeEach(() => {
        counter = new Counter(0);
    });

    it('has a default value when constructing', () => {
        const c = new Counter();
        expect(c.count()).toBe(0);
    });

    it('can create a new counter', () => {
        expect(counter).toBeDefined();
    });

    it('can increase a counter', () => {
        expect(counter.increase()).toBe(1);
    });

    it('can decrease a counter', () => {
        counter.increase();
        counter.increase();
        expect(counter.decrease()).toBe(1);
    });

    it('decreasing a counter cannot go below 0', () => {
        expect(counter.decrease()).toBe(0);
        expect(counter.decrease()).toBe(0);
    });
});
