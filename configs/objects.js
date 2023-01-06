module.exports = {
  rules: {
    "object-curly-spacing": ["warn", "always"], // Отступы в скобках объекта
    "object-curly-newline": ["warn", { "ObjectExpression": { "minProperties": 2 } }], // Перенос первого ключа в объекте 
    "object-property-newline": ["warn"] // Перенос ключей в объекте
  }
}