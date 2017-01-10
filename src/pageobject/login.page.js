'use strict';
/**
 * @classdesc Object that represents Registration > Personal informations page.
 */
class LoginPage {

  get pageElements() {
    return {
      emailAddress: '//form[@id="gigya-login-form"]//input[@name="username"]',
      password: '//form[@id="gigya-login-form"]//input[@name="password"]',

      linkLogin:'a.gigya-login',
      buttonLogin: '//form[@id="gigya-login-form"]//input[@type="submit"]',
      buttonLogout: '//button[@class="gigya-logout"]',

      errorMessage:'//form[@id="gigya-login-form"]//DIV[@class="gigya-error-msg gigya-form-error-msg gigya-error-code-403042 gigya-error-msg-active"]',
      //browser.isExisting('.error input[name="username"]');
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
      browser.setValue(this.pageElements.emailAddress, data.emailAddress);
      browser.setValue(this.pageElements.password,data.password);
      browser.click(this.pageElements.buttonLogin)
      .pause(4000);
  }

  /**
   *  @desc Click on buttonLogout
   *  @param no data
   *  @ returns { Promise }
   */
  logoutFromPage(){
    if(browser.isExisting(this.pageElements.buttonLogout)){
        browser.click(this.pageElements.buttonLogout);
        return true;
    }else{
        return false;
    }
  }

  /**
   *  @desc CheckMessageError after setting an invalid password
   *  @param no data
   *  @ returns { Promise }
   */
  checkMessageInvalidPassword(){
      if(browser.isExisting(this.pageElements.errorMessage)){
          return true;
      }else{
          return false;
      }
  }

}
module.exports = new LoginPage();
