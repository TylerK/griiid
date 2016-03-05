import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  debug: true,
  devtool: 'eval-source-map',
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
        loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:8]!postcss-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'griiid',
      template: path.resolve(__dirname, './src/views/index.html'),
      inject: false
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'React': 'react',
      '_': 'lodash',
      'ReactDOM': 'react-dom',
      'cssModules': 'react-css-modules'
    })
  ],
  postcss: () => {
    return [
      require('postcss-import')({
        path: path.join(__dirname, './src'),
        addDependencyTo: webpack
      }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ];
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  }
};

export default config;
