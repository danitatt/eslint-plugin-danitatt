module.exports = {
  rules: {
    "indent": ["warn", 2], // Общий отступ
    "no-trailing-spaces": ["warn"], // Ложные отступы
    "no-multi-spaces": ["warn"], // Несколько отступов
    "key-spacing": ["warn"], // Отступы от двоеточий
    "comma-spacing": ["warn"], // Отступ от запятых
    "space-infix-ops": [1], // Отступы между знаками
    "quotes": ["warn", "single"], // Кавычки
    "semi": ["warn", "never"], // Точка с запятой
    "comma-dangle": ["warn", "never"] // Последние запятые в объектах и массивах
  }
}