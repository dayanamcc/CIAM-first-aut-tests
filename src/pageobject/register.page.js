'use strict';


/**
 * @classdesc Object that represents Registration > Personal informations page.
 */
class RegistrationPersonalInformations {

  get pageElements() {
    return {
      emailAddress: '#gigya-loginID-7044876377523942',
      firstName: '//div[@id="register-site-login"]//input[@name="profile.firstName"]',
      lastName: '//div[@id="register-site-login"]//input[@name="profile.lastName"]',
      password: '//div[@id="register-site-login"]//input[@name="password"]',
      confirmPassword: '//div[@id="register-site-login"]//input[@name="passwordRetype"]',
      zipCode: '//div[@id="register-site-login"]//input[@name="profile.zip"]',

      radioButtomCat: '//input[@id="radioCat"]',
      radioButtomDog: '//input[@id="radioDog"]',
      radioButtomBoth: '//input[@id="radioBoth"]',
      radioButtomNone: '//input[@id="radioNone"]',

      form: 'form#gigya-register-form',
      linkRegister: 'a.gigya-register',
      buttomRegister: '//div[@id="register-site-login"]//input[@type="submit"]',

    };
  }

  /**
   *  @desc Fill in personal informations.
   *  @param {Object} data
   *  @ returns { Promise }
   */
  fillInPersonalInformations(data) {
    browser.click(this.pageElements.linkRegister)
    .pause(5000);
    browser.setValue(this.pageElements.emailAddress, data.emailAddress)
    .pause(2000);
    browser.setValue(this.pageElements.password, data.password);
    browser.setValue(this.pageElements.confirmPassword, data.password);
    browser.setValue(this.pageElements.firstName,data.firstName);
    browser.setValue(this.pageElements.lastName,data.lastName);
    browser.setValue(this.pageElements.zipCode,data.zipCode);
    browser.click(this.pageElements.radioButtomCat);
    //browser.click('//div[@id="register-site-login"]//input[@type="submit"]', 'true');
  }

}
module.exports = new RegistrationPersonalInformations();


// module.exports = {};
