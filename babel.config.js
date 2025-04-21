// eslint-disable-next-line no-undef
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
  ],
  overrides: [
    {
      test: /\.tsx?$/,
      plugins: [
        [
          '@babel/plugin-transform-typescript',
          {
            // eslint-disable-next-line no-undef
            tsconfig: require.resolve('./tsconfig.json'),
          },
        ],
      ],
    },
  ],
  ignore: [],
};
