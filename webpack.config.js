const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        globalObject: 'this',
        library: {
            type: 'umd',
        },
        path: path.resolve(__dirname, 'lib'),
    },
    externals: {
        "react": "react",
        "react-dom": "react-dom",
        "styled-components": "styled-components"
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
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
