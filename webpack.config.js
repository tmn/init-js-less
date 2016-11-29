module.exports = {
  module: {
    rules: [
      {
        text: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
