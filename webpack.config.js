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
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
            { test: /\.tsx?$/, loader: "babel-loader" },
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};