const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    devtool: 'cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './src'),

        },
        // contentVase:path.join(__dirname,'./src'),
        // publicPath:'/',
        compress: true,
        port: 3000,
        // stats:{
        //     colors:true
        // }
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        require.resolve('@babel/preset-react'),
                        [require.resolve('@babel/preset-env'), { modules: false }]
                    ],
                    cacheDirectory: true
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: true
        })
    ]


}