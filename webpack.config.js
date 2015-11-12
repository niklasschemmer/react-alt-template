var webpack = require("webpack");
var path = require("path");

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: [
        "webpack/hot/dev-server",
        "webpack-dev-server/client?http://localhost:8080",
        path.resolve(ROOT_PATH, "app/app")
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(ROOT_PATH, "build"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ["react-hot", "babel"],
                include: path.resolve(ROOT_PATH, 'app')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};