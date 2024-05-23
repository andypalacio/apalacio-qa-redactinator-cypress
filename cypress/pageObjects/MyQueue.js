import {BasePage} from "./BasePage";

export class MyQueue extends BasePage {
    constructor() {
        super();
    }

    validateEConsultIsRemoved(eConsult) {
        cy.contains(eConsult).should('not.be.visible');
    }

    validateEConsultIsActive(eConsult) {
        cy.contains(eConsult).get('.thumbnail').children('[src="assets/check.png"]').should('be.visible');
    }

    clickQueueButton(eConsult, button, caption){
        cy.contains(eConsult)
            .siblings()
            .siblings('.container')
            .first()
            .get(button)
            .contains(caption).click();
     }

    validateIsRedirectedTo(url) {
        cy.url().should('contain',url);
    }

    clickOnAttachment() {
        //to save time I just used the selector tha cypress tool provided, would be ideal to save what was teh attachment that the user was working on and then access it again.
        cy.get(':nth-child(2) > :nth-child(3) > .thumbnail').click();
    }
}