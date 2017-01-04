'use strict';

//require('src/support/browser-command/generic-custom-browser-commands');
//require('src/support/browser-command/form-custom-browser-commands');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.Should();
//chaiAsPromised.transferPromiseness = browser.transferPromiseness;

//global.faker = require('src/support/lib/nes-faker');
global.expect = chai.expect;
//global.Nespresso = require('src/support/nespresso.js');
