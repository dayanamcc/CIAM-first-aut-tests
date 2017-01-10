Feature: Update personal information

Scenario: Update my first name and last name
  Given I am customer with emailcom and Password
  And I am on the my account personal informations page
  When I update my personal informations firstName and lastname
  Then I should see my updated personal information firstName and lastname
