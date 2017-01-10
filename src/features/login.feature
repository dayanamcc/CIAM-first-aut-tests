@login
Feature: Login a user

@ignore
Scenario: Successful login with valid credentials from the user menu
  Given I am a visitor
  When I log in from menu as customer loginpageemailcompassword
  Then I should be a customer logged

@ignore
Scenario: Unsucessfull login with invalid Username
  Given I am a visitor2
  When I log in from menu as customer with login and wrongpassword
  Then I should be told that I have provided wrong credentials
