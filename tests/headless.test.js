
// These end-to-end tests use puppeteer and headless chrome using the default jest-environment configuration.

const { sum } = require('../src');

describe('sum test', function () {


    it('test will be success', async () => {
        sum();
    });
})