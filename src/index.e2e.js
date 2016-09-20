/* global describe, it, browser */
import assert from 'assert';

describe('webdriver.io page', () => {
    it('should have a page title', () => {
        browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, 'Webpack starter');
    });

    it('should have a title', () => {
        assert.equal(browser.element('.header1').getText(), 'Webpack Starter');
    });

    it('should have an image', () => {
        assert.equal(browser.element('img').getAttribute('src'), 'http://localhost:4000/assets/img/webpack.svg');
        assert.equal(browser.element('img').getAttribute('alt'), 'WebPack');
    });
});
