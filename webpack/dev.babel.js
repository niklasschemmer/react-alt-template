import webpack from "webpack";
import path from "path";

var ROOT_PATH = path.resolve('./');

export default {
    entry: [
        "webpack/hot/dev-server",
        "webpack-dev-server/client?http://localhost:8080",
        path.resolve(ROOT_PATH, "app/index")
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(ROOT_PATH, "build"),
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ["react-hot", "babel"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};