
// These end-to-end tests use puppeteer and headless chrome using the default jest-environment configuration.

const { multiply, echox } = require('../src/pkg1/echox');

describe('sum test', function () {


    it('test will be success', async () => {
        multiply();
        echox();
    });
})