module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        paths: ['src'],
        alias: {
          // '@/store/*': './src/store/*',
          // '@/hooks/*': './src/hooks/*',
          // '@/navigations': './src/navigations',
        },
      },
    },
  },
};
