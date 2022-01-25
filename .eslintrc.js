module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn'],
  env: {
    node: true,
  },
  rules: {
    'no-extra-boolean-cast': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-trailing-spaces': 'error',
    'eol-last': 2,
    'require-await': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    complexity: ['error', 10],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-param-reassign': 'error',
    'no-return-await': 'error',
    'prefer-const': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['node_modules', 'dist', 'coverage', 'package-lock.json'],
};
