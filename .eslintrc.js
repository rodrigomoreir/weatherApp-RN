module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: '@react-native-community',
  plugins: ['react', 'prettier', 'react-hooks', 'import', 'jsx-a11y'],
  globals: {
    __DEV__: true,
    fetch: false,
  },
  env: {
    jest: true,
  },
  rules: {
    'comma-dangle': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'react/state-in-constructor': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    camelcase: 'off',
    'import/order': [
      'error',
      {
        groups: ['external', ['internal', 'sibling']],
      },
    ],
    strict: 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
