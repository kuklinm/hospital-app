const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/, enforce: 'pre', exclude: /node_modules/, use: ['eslint-loader']
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {test: /\.js$/, exclude: /node_modules/, use: {loader: 'babel-loader'}},
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new CopyWebpackPlugin()
  ]
};