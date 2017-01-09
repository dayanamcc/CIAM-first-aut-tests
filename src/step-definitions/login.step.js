var assert = require('assert')
var chai = require('chai')

var login = require('../pageobject/login.page');

module.exports = function () {

  this.Given(/^I am a visitor$/, function () {
      //TODO: A visitor: should be not logged.
      browser.url("URL");
  });

  this.When(/^I log in from menu as customer loginpageemailcompassword$/, function () {
      var dataObject = require('../data/newUser');
      login.fillInLoginPage(dataObject);
  });

  this.Then(/^I should be a customer logged$/, function () {
      if(browser.isExisting('//button[@class="gigya-logout"]')){
          browser.click('//button[@class="gigya-logout"]');
          assert(true);
      }else{
          assert(false);
      }

  });

};
