import styleLintPlugin from 'stylelint-webpack-plugin';
import base, { source } from './config.base';
import webpack from 'webpack';

const config = base('development');

// development overrides go here
config.watch = true;
config.devtool = 'cheap-module-eval-source-map';

config.plugins = config.plugins.concat([
    new styleLintPlugin({
        context: source,
        syntax: 'scss'
    }),
    new webpack.HotModuleReplacementPlugin(),
]);

export default config;
