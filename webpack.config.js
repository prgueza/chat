const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const BUILD_DIR = path.resolve(__dirname, './public/dist');
const APP_DIR = path.resolve(__dirname, './src');

const config = {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: ['/node_modules/', '/routes', '/views', '/bin', '/public'],
    poll: 1000,
  },
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json', '*'],
  },
};

module.exports = config;
