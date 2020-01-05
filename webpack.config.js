const path = require('path');

module.exports = {
    entry: './index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /config\.tsx?$/,
                use: 'config-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }

        ]
    },
    resolveLoader: {
        modules: [path.join(__dirname, './tools'), 'node_modules']
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};