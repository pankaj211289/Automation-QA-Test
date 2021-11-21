/// <reference types="cypress" />

import { HOME } from "../../support/pages";

const {
    route,
    selectors : { homePage : pageSelectors }
} = HOME;

class HomePage {

    navigateToPage() {
        cy.visit(route);
    }

    clickPricingLink() {
        cy.get("a").contains(pageSelectors.pricingLinkText).click();
    }

    clickContactLink() {
        cy.get("a").contains(pageSelectors.contactLinkText).click();
    }
}

export default HomePage;
