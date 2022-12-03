module.exports = {
  rules: {
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": ["warn"],
    "object-curly-newline": ["warn", { "ObjectExpression": { "minProperties": 2 } }]
  }
}