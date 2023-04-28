const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        library: {
            type: 'umd',
        },
        path: path.resolve(__dirname, 'lib'),
    },
    externals: [
        "react",
        "react-dom",
        "styled-components",
    ],
    resolve: {
        extensions: ['.ts', '.tsx'],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    }
};
