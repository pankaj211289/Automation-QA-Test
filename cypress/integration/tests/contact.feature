Feature: Validate Contact Page

    consisting scenarios related to contact page validation

    Scenario: Navigate to Pricing page and validate error messages
        Given I navigate to home page
        When I click on contact link
        Then I can see Contact page
        And I click send button in contact page
        Then I can see the error message "Name is mandatory"
        And I can see the error message "Email is mandatory"
        And I can see the error message "Comment is mandatory"

    Scenario: Validate Name field validations
        Given I navigate to home page
        And I click on contact link
        When I click send button in contact page
        Then I can see the error message "Name is mandatory"

        # Allows character only
        And I enter "Abc" in name input field
        And I click send button in contact page
        Then I can see "Abc" is accepted as name
        # Allows special chaaracter in name and all possible unicode
        When I enter "!@#$%^&*()" in name input field 
        And I click send button in contact page
        Then I can see "!@#$%^&*()" is accepted as name
        When I enter "名前" in name input field
        And I click send button in contact page
        Then I can see "名前" is accepted as name

    Scenario: Validate Email field validations
        Given I navigate to home page
        And I click on contact link

        # In-correct email addresses
        When I enter "plainaddress" in email input field
        And I click send button in contact page
        Then I can see the error message "The email provided is not valid"

        When I enter "#@%^%#$@#$@#.com" in email input field
        And I click send button in contact page
        Then I can see the error message "The email provided is not valid"

        When I enter "@example.com" in email input field
        And I click send button in contact page
        Then I can see the error message "The email provided is not valid"

        When I enter ".email@example.com" in email input field
        And I click send button in contact page
        Then I can see the error message "The email provided is not valid"

        #Correct email address
        When I enter "email@123.cs" in email input field
        And I click send button in contact page
        Then I can see "email@123.cs" is accepted as email

    Scenario: Validate Comment field validations
        Given I navigate to home page
        And I click on contact link
        When I click send button in contact page
        Then I can see the error message "Comment is mandatory"

        # Allows sentence in comments
        And I enter comment in text field
        And I click send button in contact page
        Then I can see comment is accepted

    Scenario: Select invalid date of arrival and date of departure
        Given I navigate to home page
        And I click on contact link

        # select Invalid Date of arrival
        When I select arrival day as "20" and month as "December" & departure day as "29" and month as "December"
        And I cannot select date of arrival as calender day "14" and calender month as "April"

    Scenario: Validate Phone field do not have validations
        Given I navigate to home page
        And I click on contact link

        # Invalid phone number is being accepted
        And I enter "+123456789123456789" phone number in input field
        And I click send button in contact page
        Then I can see "+123456789123456789" is accepted as phonenumber

    


        
        
        

        
        
        


