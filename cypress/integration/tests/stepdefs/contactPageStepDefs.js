/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ContactPage from "../../common/contactPage";

const contactPage = new ContactPage();

Then("I can see Contact page", () => {
    contactPage.validatePage();
});

Then("I can see the error message {string}", (errorMessage) => {
    contactPage.validateErrorMessage(errorMessage);
});

When("I click send button in contact page", () => {
    contactPage.clickSendButton();
});

When("I enter {string} in name input field", (name) => {
    contactPage.enterName(name);
});

When("I enter {string} in email input field", (email) => {
    contactPage.enterEmail(email);
});

When("I enter comment in text field", () => {
    contactPage.enterComment();
});

When("I enter {string} phone number in input field", (phoneNumber) => {
    contactPage.enterPhoneNumber(phoneNumber);
});

Then("I can see {string} is accepted as name", (name) => {
    contactPage.verifyValidName(true, name);
});

Then("I can see {string} is accepted as email", (email) => {
    contactPage.verifyValidEmail(email);
});

Then("I can see comment is accepted", () => {
    contactPage.verifyValidComment();
});

Then("I can see {string} is accepted as phonenumber", (phoneNumber) => {
    contactPage.verifyValidPhoneNumber(true, phoneNumber);
});

Then("I cannot select date of arrival as calender day {string} and calender month as {string}", (day, month) => {
    contactPage.validateDateOfArrivalIsDisabled(day, month);
});

Then("I select arrival day as {string} and month as {string} & departure day as {string} and month as {string}", (arrivalDay, arrivalMonth, departureDay, departureMonth) => {
    contactPage.selectDate(arrivalDay, arrivalMonth, departureDay, departureMonth);
});

Then("I select date of arrival as calender day {string} and calender month as {string}", (day, month) => {
    contactPage.validateDateOfArrivalIsDisabled(day, month);
});
