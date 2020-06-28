const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index': './src/index.js',
    'kiwi': './src/kiwi.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 7000,
      automaticNameDelimiter: '_'
    }
  },
  module: { 
    rules: [ 
      {
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ 'transform-class-properties' ]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      title: 'Tutorial Btn Page',
      description: 'Udemy tutorial to learn Webpack 4',
      template: 'src/page-template.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'kiwi.html',
      chunks: ['kiwi'],
      title: 'Kiwi Page',
      description: 'Kiwi Image Page',
      template: 'src/page-template.hbs'
    })
  ]
}
