const webpack = require('webpack')

module.exports = {
    devServer:{
        hot:true
    },
    entry:['./src/index.js','./src/dev.js'],
    pubgins:[new webpack.HotModuleReplacementPlugin()]
}