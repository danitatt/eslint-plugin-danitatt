module.exports = {
  meta: {
    fixable: true
  },
  create: ({ getSourceCode, report }) => {
    const sourceCode = getSourceCode()
    return {
      ReturnStatement(node) {
        if (!['JSXFragment', 'JSXElement'].includes(node.argument.type)) return
        const before = sourceCode.getCommentsBefore(node)
        if (!before.length || before.pop().value !== ' Return jsx') report({
          node: sourceCode.getFirstToken(node),
          message: 'Create comment // Return jsx',
          fix: (fix) => fix.insertTextBefore(node, '// Return jsx\n')
        })
      }
    }
  }
}