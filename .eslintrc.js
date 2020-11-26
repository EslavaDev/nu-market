module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `./tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': [2, 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
