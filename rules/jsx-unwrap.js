module.exports = {
  meta: {
    fixable: true
  },
  create: ({ getSourceCode, report }) => {
    const sourceCode = getSourceCode()
    return {
      ReturnStatement(node) {
        if (!['JSXFragment', 'JSXElement'].includes(node.argument.type)) return
        const before = sourceCode.getTokenBefore(node.argument)
        const after = sourceCode.getTokenAfter(node.argument)
        if (before.value === '(' && after.value === ')') {
          report({
            node: before,
            message: 'Oopps',
            fix: (fixer) => fixer.replaceText(node, 'return ' + sourceCode.getText(node.argument))
          })
          report({
            node: after,
            message: 'Oopps',
            fix: (fixer) => fixer.replaceText(node, 'return ' + sourceCode.getText(node.argument))
          })
        }
      }

    }
  }
}