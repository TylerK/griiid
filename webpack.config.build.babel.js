import path from 'path';
import config from './webpack.config.babel';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const BuildConfig = Object.assign({}, config, {
  context: path.join(__dirname, 'src'),
  entry: {
    background: 'background.js',
    content: 'content.js'
  },
  plugins: config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new CopyWebpackPlugin([
      { from: 'manifest.json', to: '.' },
      { from: 'assets', to: 'assets' }
    ])
  ])
});

export default BuildConfig;
