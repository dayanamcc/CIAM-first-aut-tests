'use strict';

/**
 * @classdesc my-account page. Represents the personal information of an user.
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
    browser.pause(4000);
    browser.setValue(this.pageElements.inputFirstName, data.firstName);
    browser.setValue(this.pageElements.inputLastName, data.lastName)
    .pause(9000);
  }

  /**
   *  @desc updatePersonalInformation firstName and lastName
   *  @param {Object} data
   *  @ returns { Promise }
   */
   seeCustomerWithName(data){
    var firstName = browser.getValue(this.pageElements.inputFirstName);
    var lastName = browser.getValue(this.pageElements.inputLastName);

    return Promise.all([
      data.firstName.should.equal(firstName),
      data.lastName.should.equal(lastName),
    ]);
  }

}
module.exports = new RegistrationPersonalInformations();
