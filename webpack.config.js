const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'schemaBuilder',
        libraryTarget: 'umd',
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        pure_funcs: ['console.log'],
                    },
                    mangle: {
                        reserved: ['console.log'],
                    },
                    keep_fnames: false,
                    keep_classnames: false
                },
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new JavaScriptObfuscator ({
            rotateUnicodeArray: true
        }, ['excluded_bundle_name.js']),
    ],
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                loader: 'worker-loader', 
                options: { 
                    inline: 'fallback' 
                }
            },
            {
                test: /\.json5$/i,
                loader: 'json5-loader',
                type: 'javascript/auto',
                options: {
                    outputPath: 'assets/json/',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            }
        ],
    },
};