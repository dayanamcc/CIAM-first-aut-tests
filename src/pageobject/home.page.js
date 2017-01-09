'use strict';

/**
 * @classdesc Object that represents Registration > Personal informations page.
 */
class HomePage {

  get pageElements() {
    return {
      linkRegister: 'a.gigya-register',
      linkLogin:'a.gigya-login',

      buttomLogout:'//button[@type="button"][@class="gigya-logout"]',
      buttomRegister: '//div[@id="register-site-login"]//input[@type="submit"]',
      buttomLogout: '//BUTTON[@type="button"][text()="Logout"]'
    };
  }

}
module.exports = new HomePage();
