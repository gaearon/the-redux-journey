var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.less$/,
      loaders: ['style', 'css', 'less'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.jpg|png|svg|ico$/,
      loaders: ['file-loader?name=[name].[ext]', 'image-webpack-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
};
