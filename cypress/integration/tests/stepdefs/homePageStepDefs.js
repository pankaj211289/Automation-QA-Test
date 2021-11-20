/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../common/homePage";

const homePage = new HomePage();

Given("I navigate to home page", () => {
    homePage.navigateToPage();
});

When("I can see contact link", () => {
    homePage.contactLinkExists();
});

When("I can see pricing link", () => {
    homePage.pricingLinkExists();
});

When("I click on contact link", () => {
    homePage.clickContactLink();
});

When("I click on pricing link", () => {
    homePage.clickPricingLink();
});
