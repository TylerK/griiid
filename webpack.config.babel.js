import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|dist/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'griiid',
      template: path.resolve(__dirname, './src/views/index.html'),
      inject: true
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('index.css')
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './src')
    ]
  }
};

export default config;
