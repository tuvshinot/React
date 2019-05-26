const path = require('path')
const autoprefixer = require('autoprefixer')
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:"./src/index.js",
    output : {
        path : path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].js',
        filename:'bundle.js',
        publicPath : ''
    },
    resolve : {
        extensions : ['.js', '.jsx']
    },
    // what to do with individual files
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use: [
                    {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/react']
                      }
                    }
                ]
            },
            {
                test:/\.css$/,
                exclude : /node_modules/,
                // ordering is vital
                use : [
                    { loader : 'style-loader' },
                    { 
                        loader : 'css-loader' ,
                        options : {
                            importLoaders : 1, // one before css loader bottom to top
                            modules : true,
                            localIdentName : '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader : 'postcss-loader',
                        options : {
                            ident : 'postcss',
                            plugins : () => [
                                autoprefixer({
                                    browsers :[
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test : /\.(png|jpe?g|gif)$/,
                loader : 'url-loader?limit=8000&name=images/[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template : __dirname + '/src/index.html',
            filename : 'index.html',
            inject : 'body'
        })
    ]
};