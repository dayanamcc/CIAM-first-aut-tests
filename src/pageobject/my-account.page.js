'use strict';

/**
 * @classdesc Personal informations page.
 */
class RegistrationPersonalInformations {

  get pageElements() {
    return {
      linkEditProfile: 'a.gigya-edit-profile',
      inputFirstName: '//input[@id="gigya-textbox-108895911541777120"]',
      inputLastName: '//input[@id="gigya-textbox-54521032509109176"]',
    };
  }

  /**
   *  @desc Open infomation page.
   *  @param {Object} data
   *  @ returns { Promise }
   */
  openPersonalinformationPage() {
    if(browser.isExisting(this.pageElements.linkEditProfile)){
        browser.click(this.pageElements.linkEditProfile);
        return true;
    }else{
        return false;
    }
  }

  /**
   *  @desc updatePersonalInformation firstName and lastName
   *  @param {Object} data
   *  @ returns { Promise }
   */
  updatePersonalFirstnameLastname(data){
    browser.pause(3000);
    browser.setValue(this.pageElements.inputFirstName, data.firstName+'1234');
    browser.setValue(this.pageElements.inputLastName, data.lastName+'1234')
    .pause(9000);
  }

}
module.exports = new RegistrationPersonalInformations();
