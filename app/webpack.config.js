const path = require('path')
const distDir = path.resolve(__dirname, '..', 'public');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')



module.exports = {
  entry: {
    index: './entry.js'
  },
  output: {
    filename: 'bundle.js',
    path: distDir,
  },
  mode: 'development',
  devtool: 'source-map',
  watch: true,

  plugins: [
    new HtmlWebpackPlugin({
        template: './homepage.html',
      chunks: ['homepage'],
    }),
    new webpack.ProvidePlugin({ 
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ],

  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(hbs)$/,
      use: 'raw-loader'
    }, 
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000', }
    ]
  }
};