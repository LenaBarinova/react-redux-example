"use strict";

let content = require('../data/content.json');

let Api = {

  getContent(language = 'en') {
    return content.filter(obj => obj.lang === language)[0];
  }

};

module.exports = Api;