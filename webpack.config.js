module.exports = {
    mode: "development",
    target: "web",
    watch: true,
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: __dirname + "/lib",
        libraryTarget: "commonjs"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".css"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /\.module.(scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                enforce: "pre", test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};
