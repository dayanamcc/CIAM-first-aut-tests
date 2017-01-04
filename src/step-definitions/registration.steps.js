var assert = require('assert')
var chai = require('chai')

var po = require('../pageobject/register.page');

module.exports = function () {

  this.Given(/^I go to \"([^\"]*)\"$/, function (url) {
      browser.url(url);
  });

  this.When(/^I start the registration process form the login page$/, function () {
    var dataObject = require('../data/newUser');
    po.fillInPersonalInformations(dataObject);
  });

  this.Then(/^I should see logout link$/, function () {
     assert(false, 'this test will fail on purpose');
    // var cups = '2 cups please';
    // chai.isNotNumber(cups, 'how many cups');

  });

};
