import path from 'path';
import autoprefixer from 'autoprefixer';
import webpack from 'webpack';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { config } from '../package.json';
import autoprefixerConfig from '../node-config/autoprefixer.json';

export const source = path.resolve(path.join(config.src));
export const destination = path.resolve(path.join(config.dest));

export default () => {
    return {
        entry: [
            'babel-polyfill',
            path.join(source, 'scss', 'main.scss'),
            path.join(source, 'js', 'main.js'),
            path.join(source, 'index.html')
        ],

        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    include: [ source ],
                    loader: 'eslint-loader'
                },
                {
                    test: /\.html/, 
                    loader: 'htmlhint', 
                    exclude: [/node_modules/]
                }
            ],
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
                },
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    loader: 'babel'
                },
                {
                    test: /\.html$/, 
                    loader: 'raw'
                },
                {
                    test: /\.(jpe?g|png|gif|svg|eot|woff)$/i,
                    loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack'
                    ]
                }
            ]
        },
        eslint: {
            configFile: '.eslintrc'
        },

        htmlhint: {
            configFile: '.htmlhintrc'
        },
        
        sassLoader: {
            includePaths: [
                './node_modules'
            ]
        },

        output: {
            filename: 'js/[name].js',
            path: destination,
        },

        postcss: () => {
            return {
                defaults: [ autoprefixer ],
                cleaner:  [ autoprefixer(autoprefixerConfig) ]
            };
        },

        plugins: [
            new ExtractTextPlugin('css/[name].css'),
            new CopyWebpackPlugin([
                {
                    from: path.join(source, 'assets'),
                    to: path.join(destination, 'assets')
                },
                {
                    from: path.join(source, 'index.html'),
                    to: path.join(destination, 'index.html')
                }
            ]),
            new webpack.NoErrorsPlugin(),
        ]
    }
};
