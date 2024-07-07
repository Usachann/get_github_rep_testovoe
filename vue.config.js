
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    configureWebpack: {
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              parse: {},
              compress: {},
              mangle: true,
              module: false,
              format: {
                comments: false,
              },
            },
          }),
        ],
      },
    },
  };
  