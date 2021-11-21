import { CONTACT } from "../../support/pages";
import { LoremIpsum } from "lorem-ipsum";

const {
    route,
    selectors : { contactPage : pageSelectors }
} = CONTACT;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

class ContactPage {

    validatePage() {
        cy.location().should((location) => {
            expect(location.href).to.eq(route);
        });
    }

    clickSendButton() {
        cy.get(pageSelectors.sendBtnCSS).click({force: true});
    }

    validateErrorMessage(errorMessage) {
        cy.get(pageSelectors.errorMessageCSS).contains(errorMessage).then((webelement) => {
            expect(webelement.length > 0).to.be.true;
        });
    }

    isSendButtonDisabled(isDisabled) {
        if(isDisabled) {
            cy.get(pageSelectors.sendBtnCSS).should('be.disabled')
        } else {
            cy.get(pageSelectors.sendBtnCSS).should('not.be.disabled')
        }
    }

    enterName(name) {
        cy.get(pageSelectors.nameInputCSS).clear().type(name);
    }

    enterEmail(email) {
        cy.get(pageSelectors.emailInputCSS).clear().type(email);
    }

    enterComment() {
        cy.get(pageSelectors.commentInputCSS).clear().type(lorem.generateSentences(5));
    }

    enterPhoneNumber(phoneNumber) {
        cy.get(pageSelectors.phoneInputCSS).clear().type(phoneNumber);
    }

    verifyValidEmail(text) {
        cy.get("body").then($body => {
            expect($body.find(pageSelectors.validInputEmailFieldCSS).length > 0).to.be.true;
        });
        cy.log("Email " + text + " is accepted");
    }

    verifyValidName(text) {
        cy.get("body").then($body => {
            expect($body.find(pageSelectors.validInputNameFieldCSS).length > 0).to.be.true;
        });
        cy.log("Name " + text + " is accepted");
    }

    verifyValidComment() {
        cy.get("body").then($body => {
            expect($body.find(pageSelectors.validInputCommentFieldCSS).length > 0).to.be.true;
        });
    }

    verifyValidPhoneNumber(phoneNumber) {
        cy.get("body").then($body => {
            expect($body.find(pageSelectors.validInputPhoneFieldCSS).length > 0).to.be.true;
        });
        cy.log("Name " + phoneNumber + " is accepted");
    }

    validateDateOfArrivalIsDisabled(day, month) {
        cy.get(pageSelectors.dateRangeCSS).click();
        cy.get("body").then(($body) => {
            let isVisible = false;
            for(;!isVisible;) {
                isVisible = $body.find(pageSelectors.visibleMonthsInCalenderCSS).text().includes(month);
                $body.find(pageSelectors.dayPickerLeftButtonCSS).click();
            }
        });
        cy.get(pageSelectors.visibleMonthsInCalenderCSS).each(($webelement, index, $list) => {
            if($webelement.text().includes(month)) {
                cy.get(pageSelectors.visibleMonthsTableCSS).eq(index).contains(day).should("have.attr", "aria-disabled").and("match", /true/);
            }
        });
    }

    selectDate(arrivalDay, arrivalMonth, departureDay, departureMonth) {
        cy.get(pageSelectors.dateRangeCSS).click();
        cy.get("body").then(($body) => {
            let isVisible = $body.find(pageSelectors.visibleMonthsInCalenderCSS).text().includes(arrivalMonth);
            for(;!isVisible;) {
                isVisible = $body.find(pageSelectors.visibleMonthsInCalenderCSS).text().includes(arrivalMonth);
                $body.find(pageSelectors.dayPickerLeftButtonCSS).click();
            }
        });
        cy.get(pageSelectors.visibleMonthsInCalenderCSS).each(($webelement, index, $list) => {
            if($webelement.text().includes(arrivalMonth)) {
                cy.get(pageSelectors.visibleMonthsTableCSS).eq(index).contains(arrivalDay).click();
            }
        });
        cy.wait(1000);
        cy.get("body").then(($body) => {
            let isVisible = $body.find(pageSelectors.visibleMonthsInCalenderCSS).text().includes(departureMonth);
            for(;!isVisible;) {
                isVisible = $body.find(pageSelectors.visibleMonthsInCalenderCSS).text().includes(departureMonth);
                $body.find(pageSelectors.dayPickerRightButtonCSS).click();
            }
        });
        cy.get(pageSelectors.visibleMonthsInCalenderCSS).each(($webelement, index, $list) => {
            if($webelement.text().includes(departureMonth)) {
                cy.get(pageSelectors.visibleMonthsTableCSS).eq(index).contains(departureDay).click();
            }
        });
    }
}

export default ContactPage;