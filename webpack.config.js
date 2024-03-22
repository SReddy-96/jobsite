let path = require('path');
let nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// This is to set up the Webpack and config the program in where the entry points are and where the output will be.

const moduleObj = {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
    },
    {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    }],
};

const client = {
    mode: 'development',   // !!!! change when in production
    entry: {
        'client': './src/client/index.jsx',
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: moduleObj,
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/client/index.html'
        })
    ]
};

const server = {
    mode: 'development',   // !!!! change when in production
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    externals: [nodeExternals()]
};

module.exports = [client, server];