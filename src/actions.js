"use strict";

const ACTION_TYPES = require('./action-types');

export function switchLanguage(language) {
  return {
      type: ACTION_TYPES.SWITCH_LANGUAGE,
      language
  }
};

export function initApp() {
  return {
    type: ACTION_TYPES.INIT_APP
  }
}