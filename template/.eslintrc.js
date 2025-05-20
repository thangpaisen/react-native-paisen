module.exports = {
  root: true,
  extends: '@react-native',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    semi: 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-case-declarations': 'off',
    'react-native/no-inline-styles': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'jsx-quotes': 'off',
  },
}
