"use strict";

const action_types = require('./action-types');

export function switchLanguage(language) {
  return {
    type: action_types.SWITCH_LANGUAGE,
    language
  }
}
