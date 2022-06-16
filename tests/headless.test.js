
// These end-to-end tests use puppeteer and headless chrome using the default jest-environment configuration.

import {sum} from "../src";

describe("headless browser tests", async () => {
    it("gets the browser version",  async () => {
        sum();
    });
    
    /*it("gets a page object",  async () => {
        const page = await browser.newPage();
        console.log("page: " + page);
        expect(page).toBeTruthy();
    });*/
});
