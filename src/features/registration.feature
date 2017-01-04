@javascript
Feature: Register new user
  As a visitor
  I want to register on the website
  So I become a Member

    Scenario: Register from the login page
      Given I go to "https://www.purinadentalife.com/"
      When I start the registration process form the login page
      Then I should see logout link
      
