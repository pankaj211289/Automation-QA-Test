/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import PricingPage from "../../common/pricingPage";

const pricingPage = new PricingPage();

When("I can see Pricing page", () => {
    pricingPage.validatePage();
});

And("I move number of rentals slider to {string} percent", (percent) => {
    pricingPage.moveSliderTo(percent);
});

And("I can see plan {string} has price {string} with subscription as {string}", (planName, planPrice, planPeriod) => {
    pricingPage.validatePlan(planName, planPrice, planPeriod);
});

And("I can see plan {string} has price in {string} currency with subscription as {string}", (planName, planPriceCurrency, planPeriod) => {
    pricingPage.validatePlanCurrency(planName, planPriceCurrency, planPeriod);
});

When("I select currency {string} in pricing plan", (currency) => {
    pricingPage.selectCurrency(currency);
});

When("I click on {string} price period", (period) => {
    pricingPage.selectPricePeriod(period);
});

Then("I record the price for {string} rentals for {string} plan", (rentals, planType) => {
    pricingPage.getValueOfPlanForSlider(rentals, planType);
});

Then("I validate price for {string} rentals is more than {string} rentals as recorded earlier for {string} plan", (rentals, previousRentals, planType) => {
    pricingPage.validatePriceIncreaseAsRentals(rentals, previousRentals, planType);
});

Then("I can see previously recorded {string} plan for {string} rentals provides discount up to {string} percent", (planType, numberOfRentals, discount) => {
    pricingPage.validateDiscount(planType, numberOfRentals, discount);
});

Then("I validate the price conversion into {string} from {string} for {string} plan for {string} rentals", (currentCurrency, previousCurrency, planType, rentals)=> {
    pricingPage.validateCurrencyConversion(currentCurrency, previousCurrency, planType, rentals);
});
