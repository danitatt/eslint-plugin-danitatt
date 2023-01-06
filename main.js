// Require local configs
const generals = require('./configs/generals.js')
const objects = require('./configs/objects.js')
const arrays = require('./configs/arrays.js')

// Require local rules
// const jsxUnwrap = require('./rules/jsx-unwrap.js')
// const returnComment = require('./rules/return-comment.js')

// Module exports object
module.exports = {

  // Set configs
  configs: {
    "generals": generals,
    "objects": objects,
    "arrays": arrays
  },

  // Set rules
  rules: {}
  // "jsx-unwrap": jsxUnwrap,
  // "return-comment": returnComment
  
}