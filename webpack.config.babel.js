import webpack from 'webpack';
import path from 'path';

const config = {
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
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
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'React': 'react',
      '_': 'lodash',
      '$': 'jquery',
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
