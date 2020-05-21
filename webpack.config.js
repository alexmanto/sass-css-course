var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); 
const path = require ('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules:[
        {
            test: /\.s?[ac]ss$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(jpg|gif|png|svg)$/,
            use: ['file-loader']
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          hash: true,
          template: './src/index.html',
          filename: './index.html' //relative to root of the application
      })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        writeToDisk: true,
        port: 9000
      }
  };