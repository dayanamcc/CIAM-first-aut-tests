var assert = require('assert')
var chai = require('chai')

var register = require('../pageobject/register.page');
var home = require('../pageobject/home.page');

module.exports = function () {
  
  this.Given(/^I go to \"([^\"]*)\"$/, function (url) {
      browser.url(url);
  });

  this.When(/^I start the registration process form the login page$/, function () {
    var dataObject = require('../data/newUser');
    register.fillInPersonalInformations(dataObject);
  });

  this.Then(/^I should see logout link$/, function () {
    chai.assert(true == browser.isExisting(''+home.pageElements.buttomLogout), 'fails on register, link for Logout dont exist' );
  });

};
