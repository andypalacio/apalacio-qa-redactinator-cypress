const {defineConfig} = require('cypress')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const { addMatchImageSnapshotPlugin } = require('@simonsmith/cypress-image-snapshot/plugin');
const { allureCypress } = require("allure-cypress/reporter");


async function setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    );
    allureCypress(on, {
        resultsDir: "./allure-results",
        links: [
            { type: "issue", urlTemplate: "https://issues.example.com/%s" },
            { type: "tms", urlTemplate: "https://tms.example.com/%s" },
        ],
    });

    addMatchImageSnapshotPlugin(on);

    return config;
}

module.exports = defineConfig({
    e2e: {
        specPattern: "**/*.feature",
        excludeSpecPattern: [
            "*.js",
            "*.md"
        ],
        chromeWebSecurity: false,
        projectId: "bfi83g",
        supportFile: false,
        numTestsKeptInMemory: 0,
        setupNodeEvents,
    }
})