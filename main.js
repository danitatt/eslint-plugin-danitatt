// Require configs
const objects = require('./configs_new/objects.js')
const arrays = require('./configs_new/arrays.js')

// Require rules
const jsxUnwrap = require('./rules/jsx-unwrap.js')
const returnComment = require('./rules/return-comment.js')

// Module exports object
module.exports = {

  // Set configs
  configs: {
    "objects": objects,
    "arrays": arrays
  },

  // Set rules
  rules: {
    "jsx-unwrap": jsxUnwrap,
    "return-comment": returnComment
  }
}