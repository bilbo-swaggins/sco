var webpack = require("webpack");
    BowerWebpackPlugin = require('bower-webpack-plugin');
module.exports = {
  entry: './js/entry.js',
  output: {
    path: __dirname + "/dist/js/",
    filename: 'bundle.js'
  },
  plugins: [
      new BowerWebpackPlugin({
        excludes: /.*\.less/
      }),
      new webpack.ProvidePlugin({
        $:      "jquery",
        jQuery: "jquery"
      })
    ]
};
