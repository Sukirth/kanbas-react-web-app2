/* eslint-disable no-unused-vars */
const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      fs: false,
      http: require.resolve('stream-http'),
      net: false,
      stream: require.resolve('stream-browserify'),
    },
  },
  // Your other webpack configurations go here
};
