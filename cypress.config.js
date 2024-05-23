const {defineConfig} = require('cypress')
const cypressOnFix = require('cypress-on-fix');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const { addMatchImageSnapshotPlugin } = require('@simonsmith/cypress-image-snapshot/plugin');
const addContext = require('./node_modules/mochawesome/src/addContext.js');


async function setupNodeEvents(on, config) {
    on = cypressOnFix(on);
    require('cypress-mochawesome-reporter/plugin')(on);
    await addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    );

    on('after:run', async () => {
        console.log('override after:run');
        addContext();
    });

    addMatchImageSnapshotPlugin(on);

    return config;
}

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        video: false,

    },
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