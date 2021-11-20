import { PRICING } from "../../support/pages";

const {
    route,
    selectors : { pricingPage : pageSelectors }
} = PRICING;

const { softExpect } = chai;

class PricingPage {

    constructor() {
        this.sliderPriceKeyValue = new Map();
    }

    validatePage() {
        cy.location().should((location) => {
            expect(location.href).to.eq(route);
        });
        cy.get(pageSelectors.activemenuItemCSS).should("have.attr","href").and("match", /pricing/);
        cy.get(pageSelectors.headerTag).then((webElement) => {
            expect(webElement.text().includes(pageSelectors.headerText)).to.be.true;
        });
    }

    moveSliderTo(percent) {
        cy.getByID(pageSelectors.sliderInputID).click();
        cy.getByID(pageSelectors.sliderInputID).clear().type(percent);
    }

    validatePlan(planName, planPrice, planPeriod) {
        cy.getByClassName(pageSelectors.priceItemClass).each(($webelement, index, $list) => {
            if($webelement.find("." + pageSelectors.planNameClass).text().includes(planName)) {
                expect($webelement.find("." + pageSelectors.planPriceClass).text()).to.be.eq(planPrice);
                expect($webelement.find("." + pageSelectors.planPeriodClass).text().includes(planPeriod)).to.be.true;
            }
        });
    }

    validatePlanCurrency(planName, planPriceCurrency, planPeriod) {
        cy.getByClassName(pageSelectors.priceItemClass).each(($webelement, index, $list) => {
            if($webelement.find("." + pageSelectors.planNameClass).text().includes(planName)) {
                expect($webelement.find("." + pageSelectors.planPriceClass).text().includes(planPriceCurrency)).to.be.true;
                expect($webelement.find("." + pageSelectors.planPeriodClass).text().includes(planPeriod)).to.be.true;
            }
        });
    }

    selectCurrency(currency) {
        cy.getByClassName(pageSelectors.priceCurrencySelectClass).select(currency);
    }

    selectPricePeriod(period) {
        cy.get(pageSelectors.pericePeriodButtonsCSS).contains(period).click({force: true});
    }

    getValueOfPlanForSlider(numberOfRentals, planType) {
        cy.getByID(pageSelectors.sliderInputID).clear().type(numberOfRentals);
        cy.getByClassName(pageSelectors.priceItemClass).each(($webelement, index, $list) => {
            if($webelement.find("." + pageSelectors.planNameClass).text().includes(planType)) {
                this.sliderPriceKeyValue.set(planType+numberOfRentals, Number($webelement.find("." + pageSelectors.totalSumClass).text()));
            }
        });
    }

    validatePriceIncreaseAsRentals(numberOfRentals, previousRentals, planType) {
        cy.getByID(pageSelectors.sliderInputID).clear().type(numberOfRentals);
        cy.getByClassName(pageSelectors.priceItemClass).each(($webelement, index, $list) => {
            if($webelement.find("." + pageSelectors.planNameClass).text().includes(planType)) {
                expect(this.sliderPriceKeyValue.get(planType+previousRentals)).to.lessThan(Number($webelement.find("." + pageSelectors.totalSumClass).text()));
            }
        });
    }

    validateDiscount(planType, numberOfRentals, discount) {
        cy.getByClassName(pageSelectors.priceItemClass).each(($webelement, index, $list) => {
            if($webelement.find("." + pageSelectors.planNameClass).text().includes(planType)) {
                let monthlyPrice = Number($webelement.find("." + pageSelectors.totalSumClass).text());
                let discountPrice = monthlyPrice - this.sliderPriceKeyValue.get(planType+numberOfRentals);
                let discountedPercentage = discountPrice/monthlyPrice * 100;
                cy.log("Price recorded previously for plan " + planType + " is : " + this.sliderPriceKeyValue.get(planType+numberOfRentals));
                cy.log("Current price for plan " + planType + " is " + monthlyPrice);
                cy.log("Discount offered for plan " + planType + " is " + discount);
                softExpect(discountedPercentage <= Number(discount)).to.be.true;
            }
        });
    }

    validateCurrencyConversion(currentCurrency, previousCurrency, planType, rentals) {
        cy.getByClassName(pageSelectors.priceItemClass).each(($webelement, index, $list) => {
            if($webelement.find("." + pageSelectors.planNameClass).text().includes(planType)) {
                let monthlyPrice = Number($webelement.find("." + pageSelectors.totalSumClass).text());
                cy.request("GET", "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" + previousCurrency + "/" + currentCurrency + ".json")
                    .should((response) => {
                        expect(response.status).to.eq(200);
                        cy.log(response.body[currentCurrency]);
                        softExpect(Number(response.body[currentCurrency]) * this.sliderPriceKeyValue.get(planType+rentals)).to.eq(monthlyPrice);
                    });
            }
        });
    }
}

export default PricingPage;