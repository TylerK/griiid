import config from './webpack.config.babel';

const DevConfig = Object.assign({}, config, {
  cache: true,
  debug: true,
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/content.js'
  ]
});

export default DevConfig;
