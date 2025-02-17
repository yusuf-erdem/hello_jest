// jest.config.js
module.exports = {
    verbose: true,
    preset: "jest-puppeteer",
    // this is needed by the unit tests for some reason.
    testURL: "http://localhost:8000/",

    "setupFiles": [
        "./jest/globals.js"
    ],
// jest.config.js

    "coverageReporters": [
        "text",
        "cobertura"
    ],

    reporters: [
        "default",
        ["jest-junit", {suiteName: "jest tests"},]
    ],

// jest.config.js

    reporters: [
        "default",
        ["jest-junit", {suiteName: "jest tests"},]
    ],

    // where to put the code coverage reports.
    "coverageDirectory": "./tests/coverage",

    "coveragePathIgnorePatterns": [
        "./jest",
    ],

    // A path to a module which exports an async function that is triggered once before all test suites
    "globalSetup": "./jest/globalSetup.js",

    // A path to a module which exports an async function that is triggered once after all test suites
    "globalTeardown": "./jest/globalTeardown.js",
};
