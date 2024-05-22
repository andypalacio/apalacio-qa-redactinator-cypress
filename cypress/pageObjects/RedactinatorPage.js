import {BasePage} from "./BasePage";

export class RedactinatorPage extends BasePage {
    constructor() {
        super();
    }

    clickButton(caption) {
        cy.contains(caption).click();
    }
}