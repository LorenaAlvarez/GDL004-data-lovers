module.exports = {
<<<<<<< HEAD
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
   globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    firebase: 'readonly',
  },
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'prefer-destructuring': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
=======
    env: {
        browser: true,
        es6: true,
        'jest/globals': true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        firebase: 'readonly',
    },
    plugins: ['jest'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'linebreak-style': 0,
        'prefer-destructuring': 0,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
    },
>>>>>>> b3da92956cf78c37319f4e14849e06ad946bf4f8
};