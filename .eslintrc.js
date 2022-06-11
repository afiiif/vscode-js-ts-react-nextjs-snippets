module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:unicorn/recommended', 'prettier'],
  plugins: ['simple-import-sort'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
  },
  rules: {
    'no-template-curly-in-string': 'off',
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-null': 'off',
  },
  overrides: [
    {
      files: ['src/**/*'],
      rules: {
        'unicorn/prefer-module': 'error',
      },
    },
  ],
};
