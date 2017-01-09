'use strict';

/**
 * @classdesc Object that represents Registration > Personal informations page.
 */
class LoginPage {

  get pageElements() {
    return {
      linkLogin:'a.gigya-login',

      emailAddress: '//form[@id="gigya-login-form"]//input[@name="username"]',
      username: '//form[@id="gigya-login-form"]//input[@name="password"]',
      buttonLogin: '//form[@id="gigya-login-form"]//input[@type="submit"]'

    };
  }

  /**
   *  @desc Fill in login page
   *  @param {Object} data
   *  @ returns { Promise }
   */
  fillInLoginPage(data) {
      browser.click(this.pageElements.linkLogin)
      .pause(2000);
      browser.setValue(this.pageElements.emailAddress,'EMAIL');
      browser.setValue(this.pageElements.username,'PASSWORD');
      browser.click(this.pageElements.buttonLogin)
      .pause(3000);
  }
}
module.exports = new LoginPage();
