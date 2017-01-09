@javascript @login
Feature: Login a user

Scenario: Successful login with valid credentials from the user menu
  Given I am a visitor
  When I log in from menu as customer loginpageemailcompassword
  Then I should be a customer logged
