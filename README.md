### Install:

`npm i --save-dev danitatt/eslint-plugin-danitatt`

Add to `.eslintrc.json` or <ins>another config file</ins>:

```json
"plugins": ["danitatt"],
"extends": [
  "plugin:danitatt/generals",
  "plugin:danitatt/objects",
  "plugin:danitatt/arrays",
  "plugin:danitatt/jsx"
]
```