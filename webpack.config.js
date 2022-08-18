const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.png$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './form/png/',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.txt$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
