const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractorPlugin = require('mini-css-extract-plugin')

module.exports = {
    node: false,
    output: {
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    plugins: [
        new MiniCssExtractorPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractorPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {

                                        }
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader"
                ],

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource"
            },
        ],
    }
}