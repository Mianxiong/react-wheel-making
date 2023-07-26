const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 本质是导出了一个对象
module.exports = {
    entry: {
        // 入口
        index: "./lib/index.tsx"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "dist/lib"),
        library: "react-wheel-making",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader",
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}