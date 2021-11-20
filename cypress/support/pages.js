export const HOME = {
    route : "/",
    selectors : {
        homePage : {
            contactLinkText : "contact.html",
            pricingLinkText : "pricing.html"
        }
    }  
}

export const CONTACT = {
    route : "http://localhost:8080/contact.html",
    selectors : {
        contactPage : {
            sendBtnCSS : "form [type='submit']",
            errorMessageCSS : ".error .red",
            nameInputCSS : "[name='name']",
            emailInputCSS : "[name='email']",
            phoneInputCSS : "[data-testid='phone-input']",
            guestsInputCSS : "[name='guests']",
            commentInputCSS : "textarea[placeholder='Comment']",
            dateRangeCSS : ".DateRangePickerInput button .icon",
            calenderMonthCSS : ".CalendarMonth",
            calenderCaptionCSS : ".CalendarMonth_caption",
            visibleMonthsInCalenderCSS : ".CalendarMonth[data-visible='true'] .CalendarMonth_caption",
            visibleMonthsTableCSS : ".CalendarMonth[data-visible='true'] .CalendarMonth_table",
            dayPickerLeftButtonCSS : ".DayPickerNavigation_leftButton__horizontalDefault",
            dayPickerRightButtonCSS : ".DayPickerNavigation_rightButton__horizontalDefault",
            dayInCalenderCSS : ".CalendarDay",
            validInputNameFieldCSS : ".valid input[name='name']",
            validInputEmailFieldCSS : ".valid input[name='email']",
            validInputCommentFieldCSS : ".valid textarea[placeholder='Comment']",
            validInputPhoneFieldCSS : ".valid [data-testid='phone-input']"
        }
    }
};

export const PRICING = {
    route : "http://localhost:8080/pricing.html",
    selectors : {
        pricingPage : {
            menuItemsCSS : "#menu-main-menu li",
            activemenuItemCSS : "#menu-main-menu li.active a",
            headerTag : "h1",
            headerText : "Vacation rental software pricing",
            sliderInputID : "scroll-prop-plan",
            priceItemClass : "price-item",
            planNameClass : "plan-name",
            planPriceClass : "plan-price",
            totalSumClass : "total-sum",
            planPeriodClass : "plan-period",
            priceCurrencySelectClass : "price-currency-select",
            pericePeriodButtonsCSS : ".price-period-buttons-2 li"
        }
    }
};


