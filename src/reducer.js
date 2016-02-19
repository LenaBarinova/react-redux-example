const ACTION_TYPES = require('./action-types');
const api = require('./api');


let reducer = function(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.INIT_APP:
      return {content: api.getContent()};
    case ACTION_TYPES.SWITCH_LANGUAGE:
      return {content: api.getContent(action.language)};
    default:
      return {content: api.getContent()};
  }
}

module.exports = reducer;