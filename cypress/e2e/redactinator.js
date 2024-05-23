require('../support/commands');
const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
const {MyQueue} = require("../pageObjects/MyQueue");
const {possiblePages, possibleButtons} = require("../helpers/helper");
const {RedactinatorPage} = require("../pageObjects/RedactinatorPage");
const page = new MyQueue();
const redactin = new RedactinatorPage();
let selEConsult = 0;
let attachmnt = 0;


Given(/^the user visits ([^"]*) page$/, (expectedPage) => {
    page.navigateTo(possiblePages[expectedPage]);
});

When(/^the user clicks on the ([^"]*) button of a pending attachment of the eConsult "([^"]*)"$/,  (button, eConsultID) => {
    selEConsult = eConsultID
    page.clickQueueButton(eConsultID, possibleButtons[button], button);
});

Then(/^the eConsult is removed from the queue$/, () => {
    page.validateEConsultIsRemoved(selEConsult);
});
Then(/^the eConsult is marked as active$/, () => {
    page.validateEConsultIsActive(selEConsult)
});
Given(/^the user is redirected to the ([^"]*) Page$/, (url) => {
    page.validateIsRedirectedTo(possiblePages[url]);
});
Given(/^the user clicks on the ([^"]*) button$/, (button) => {
    redactin.clickButton(possibleButtons[button])
});
When(/^the user clicks on the same attachment$/, () => {
    page.clickOnAttachment()
});
Given(/^a black box is added to the attachment$/, () => {
    attachmnt += 1;
    redactin.validateBBIsAdded(attachmnt);
});
Then(/^the attachment has the recently added censor$/, () => {
    redactin.validateBBIsAdded(attachmnt);
});