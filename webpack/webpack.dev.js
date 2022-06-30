const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx|ts)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    presets: ['@babel/react','@babel/preset-typescript'],
                    plugins: [
                        ['import', {libraryName: 'antd', style: true}],
                        require.resolve('react-refresh/babel'),
                    ].filter(Boolean),
                },
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            localsConvention: 'camelCase',
                            modules: {
                                localIdentName: '[local]___[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        port: 3000,
        contentBase: commonPaths.outputPath,
        compress: true,
        hot: true,
        host:'localhost',
        open: 'chrome',
        proxy: {
            '/oauth2': {
                target: 'http://localhost:8081',
                secure: false,
            },
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Referer": "*",
            "Access-Control-Allow-Headers": "*"
        }
    },
    plugins: [new ReactRefreshWebpackPlugin()],
};