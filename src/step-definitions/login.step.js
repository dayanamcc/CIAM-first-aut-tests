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
    chai.assert(true == login.logoutFromPage(), 'fails on login, link for Logout dont exist' );
  });

  this.Given(/^I am a visitor2$/, function () {
    browser.url("URL");
  });

 this.When(/^I log in from menu as customer with login and wrongpassword$/, function () {
    var dataObject = require('../data/userBadData');
    login.fillInLoginPage(dataObject);
 });

 this.Then(/^I should be told that I have provided wrong credentials$/, function () {
    chai.assert(true ==  login.checkMessageInvalidPassword(), 'The message Invalid password dont exist' );
 });

};
