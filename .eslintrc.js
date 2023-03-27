module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 14,
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
  },
};
