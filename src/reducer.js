const action_types = require('./action-types');
const api = require('./api');

let reducer = function (state = {}, action) {
  switch (action.type) {
    case action_types.INIT_APP:
      return {
        content: api.getContent()
      };
    case action_types.SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language)
      };
    default:
      return {
        content: api.getContent()
      };
  }
}

module.exports = reducer;