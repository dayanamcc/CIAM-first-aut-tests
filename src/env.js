'use strict';

const configure = function () {
  this.setDefaultTimeout(30 * 1000);
  browser.windowHandleSize({ width: 1280, height: 800 });
};

module.exports = configure;
