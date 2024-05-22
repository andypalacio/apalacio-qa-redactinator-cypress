export class BasePage {
    constructor() {

    }

    navigateTo(url) {
        if (!url) {
            throw new Error(`url Inválida: ${url}`)
        }
        cy.visit(url);
    }

    checkURL(url){
        cy.url().should('include', url)
    }
}