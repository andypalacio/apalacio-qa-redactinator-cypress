const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")
const {MyQueue} = require("../pageObjects/MyQueue");
const {possiblePages, possibleButtons} = require("../helpers/helper");
const {RedactinatorPage} = require("../pageObjects/RedactinatorPage");
const page = new MyQueue();
const redactin = new RedactinatorPage();
let selEConsult = 0
Given(/^the user visits ([^"]*) page$/, (expectedPage) => {
    page.navigateTo(possiblePages[expectedPage]);
});

When(/^the user clicks on the ([^"]*) button of a pending attachment of the eConsult "([^"]*)"$/,  (button, eConsultID) => {
    selEConsult = eConsultID
    cy.log(button)
    cy.log(possibleButtons[button])
    page.clickQueueButton(eConsultID, possibleButtons[button], button);
});

Then(/^the eConsult is removed from the queue$/, function () {
    page.validateEConsultIsRemoved(selEConsult);
});
Then(/^the eConsult is marked as active$/, function () {
    page.validateEConsultIsActive(selEConsult)
});
Given(/^the user is redirected to the ([^"]*) Page$/, function (url) {
    page.validateIsRedirectedTo(possiblePages[url]);
});
Given(/^the user clicks on the ([^"]*) button$/, function (button) {
    redactin.clickButton(possibleButtons[button])
});
When(/^the user clicks on the same attachment$/, function () {
    page.clickOnAttachment()
});