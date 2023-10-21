module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  plugins: ['prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
