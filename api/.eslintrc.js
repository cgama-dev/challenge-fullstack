module.exports = {
  parser: '',
  env: {
    es6: true,
    node: true,
    jest: true
  },
  plugins: [],
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
}