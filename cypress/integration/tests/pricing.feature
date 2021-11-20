Feature: Validate Pricing Page

    consisting scenarios related to pricing page validation

    Scenario: Navigate to Pricing page and validate price plan
        Given I navigate to home page
        When I click on pricing link
        Then I can see Pricing page
        When I move number of rentals slider to "50" percent
        Then I can see plan "Starter" has price "$64" with subscription as "per month"
        And I can see plan "Professional" has price "$375" with subscription as "per month"
        And I can see plan "Ultimate" has price "$525" with subscription as "per month"

    Scenario: Validate price of plan (Starter, Professional, Ultimate) reflects selected currency
        Given I navigate to home page
        When I click on pricing link
        Then I can see Pricing page

        When I move number of rentals slider to "40" percent
        Then I can see plan "Starter" has price in "$" currency with subscription as "per month"
        And I can see plan "Professional" has price in "$" currency with subscription as "per month"
        And I can see plan "Ultimate" has price in "$" currency with subscription as "per month"
    
        When I select currency "€ EUR" in pricing plan
        Then I can see plan "Starter" has price in "€" currency with subscription as "per month"
        And I can see plan "Professional" has price in "€" currency with subscription as "per month"
        And I can see plan "Ultimate" has price in "€" currency with subscription as "per month"

        When I select currency "£ GBP" in pricing plan
        Then I can see plan "Starter" has price in "£" currency with subscription as "per month"
        And I can see plan "Professional" has price in "£" currency with subscription as "per month"
        And I can see plan "Ultimate" has price in "£" currency with subscription as "per month"

    Scenario: Validate price of different plans while converting to specified currencies 
        Given I navigate to home page
        When I click on pricing link
        Then I can see Pricing page

        When I move number of rentals slider to "30" percent
        And I select currency "$ USD" in pricing plan
        And I record the price for "30" rentals for "Starter" plan
        And I record the price for "30" rentals for "Professional" plan
        And I record the price for "30" rentals for "Ultimate" plan
        And I select currency "€ EUR" in pricing plan
        Then I validate the price conversion into "eur" from "usd" for "Starter" plan for "30" rentals
        And I validate the price conversion into "eur" from "usd" for "Professional" plan for "30" rentals
        And I validate the price conversion into "eur" from "usd" for "Ultimate" plan for "30" rentals

        When I select currency "£ GBP" in pricing plan
        Then I validate the price conversion into "gbp" from "usd" for "Starter" plan for "30" rentals
        And I validate the price conversion into "gbp" from "usd" for "Professional" plan for "30" rentals
        And I validate the price conversion into "gbp" from "usd" for "Ultimate" plan for "30" rentals
        
    Scenario: Validate as number of rentals increases, price will also increase accordingly
        Given I navigate to home page
        When I click on pricing link
        Then I can see Pricing page
        # Validating Starter Plan
        When I record the price for "20" rentals for "Starter" plan
        Then I validate price for "40" rentals is more than "20" rentals as recorded earlier for "Starter" plan
        When I record the price for "39" rentals for "Starter" plan
        Then I validate price for "40" rentals is more than "20" rentals as recorded earlier for "Starter" plan
        # Validating Professional Plan
        When I record the price for "20" rentals for "Professional" plan
        Then I validate price for "40" rentals is more than "20" rentals as recorded earlier for "Professional" plan
        When I record the price for "39" rentals for "Professional" plan
        Then I validate price for "40" rentals is more than "20" rentals as recorded earlier for "Professional" plan
        # Vadating Ultimate Plan
        When I record the price for "20" rentals for "Ultimate" plan
        Then I validate price for "40" rentals is more than "20" rentals as recorded earlier for "Ultimate" plan
        When I record the price for "39" rentals for "Ultimate" plan
        Then I validate price for "40" rentals is more than "20" rentals as recorded earlier for "Ultimate" plan

    Scenario: Validate yearly and 2 yearly subscription plans provide discount over monthly plan
        Given I navigate to home page
        When I click on pricing link
        Then I can see Pricing page
        
        When I click on "Yearly" price period
        And I record the price for "25" rentals for "Starter" plan
        And I record the price for "25" rentals for "Professional" plan
        And I record the price for "25" rentals for "Ultimate" plan
        And I click on "Monthly" price period
        Then I can see previously recorded "Starter" plan for "25" rentals provides discount up to "30" percent
        And I can see previously recorded "Professional" plan for "25" rentals provides discount up to "30" percent
        And I can see previously recorded "Ultimate" plan for "25" rentals provides discount up to "30" percent

        When I click on "Two Years" price period
        And I record the price for "25" rentals for "Starter" plan
        And I record the price for "25" rentals for "Professional" plan
        And I record the price for "25" rentals for "Ultimate" plan
        And I click on "Monthly" price period
        Then I can see previously recorded "Starter" plan for "25" rentals provides discount up to "35" percent
        And I can see previously recorded "Professional" plan for "25" rentals provides discount up to "35" percent
        And I can see previously recorded "Ultimate" plan for "25" rentals provides discount up to "35" percent
