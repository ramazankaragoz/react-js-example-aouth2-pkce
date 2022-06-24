const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');


module.exports = (env) => {
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'index_bundle.js',
        },
        watch: true,
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // you can specify a publicPath here
                                // by default it use publicPath in webpackOptions.output
                                publicPath: '/'
                            }
                        },
                        "css-loader"
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|html)$/,
                    loader: 'file-loader',
                    options: {
                        name(file) {
                            if (env.ENVIRONMENT === 'development') {
                                return '[path][name].[ext]';
                            }
                            return '[path][hash].[ext]';
                        },
                    },
                },
                {
                    test: /\.(eot|woff|woff2|ttf)$/,
                    loader: 'url-loader'

                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin()

        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    test: /\.js(\?.*)?$/i,
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    }

};