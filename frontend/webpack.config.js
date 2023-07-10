

module.exports = {

  resolve: {
    fallback: {
      "querystring": require.resolve("querystring-es3"),
      "zlib": require.resolve("browserify-zlib"),
      "path": require.resolve("path-browserify"),
      "http": require.resolve("stream-http"),
      "stream": require.resolve("stream-browserify")
    }
  }
};
