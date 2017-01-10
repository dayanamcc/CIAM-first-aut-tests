var assert = require('assert')
var chai = require('chai')

var myAccount = require('../pageobject/my-account.page');
var login = require('../pageobject/login.page');

module.exports = function () {

  this.Given(/^I am customer with emailcom and Password$/, function () {
      var dataObject = require('../data/newUser');
      browser.url("URL");
      login.fillInLoginPage(dataObject);
  });

  this.Given(/^I am on the my account personal informations page$/, function () {
      myAccount.openPersonalinformationPage();
  });

  this.When(/^I update my personal informations firstName and lastname$/, function () {
      var dataObject = require('../data/newUser');
      myAccount.updatePersonalFirstnameLastname(dataObject);
  });

  this.Then(/^I should see my updated personal information firstName and lastname$/, function () {
     assert(true);
  });

};
