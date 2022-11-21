// ...
const jsxUnwrap = require('./rules/jsx-unwrap.js')
const returnComment = require('./rules/return-comment.js')
const test = require('./rules/test.js')

// ...
const recommended = require('./configs/recommended.js')

// ...
module.exports = {
  rules: {
    "jsx-unwrap": jsxUnwrap,
    "return-comment": returnComment,
    "test": test
  },
  configs: {
    "recommended": recommended
  }
}