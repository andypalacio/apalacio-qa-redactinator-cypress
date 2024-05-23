import {BasePage} from "./BasePage";

export class RedactinatorPage extends BasePage {
    constructor() {
        super();
    }

    clickButton(caption) {
        cy.contains(caption).click();
    }

    validateBBIsAdded(imageNumber) {
        cy.get('#fgCanvas').matchImageSnapshot(`canvasWithBox${imageNumber}`)
    }
}