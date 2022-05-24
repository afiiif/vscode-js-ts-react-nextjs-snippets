module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:unicorn/recommended', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
  },
  rules: {
    'no-template-curly-in-string': 'off',
    'import/prefer-default-export': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-null': 'off',
  },
};
