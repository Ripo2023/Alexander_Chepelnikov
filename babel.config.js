module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        alias: {
          types: './@types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
