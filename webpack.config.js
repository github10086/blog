const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('webpack-clean-plugin');

module.exports = {
    //devtool: 'eval-source-map',
	// 页面入口文件配置
	entry: {
	    common: ['react', 'react-dom'],
        index: [
            'webpack-dev-server/client?http://localhost:3000/',
            'webpack/hot/only-dev-server',
            './src/js/index.js'
        ]
    },
	// 入口文件输出配置
	output: {
	    publicPath: '/build/',
		path: path.resolve(__dirname, './build/'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		// 加载器配置
		loaders: [
			{ test: /\.(png|jpg)$/, loader: 'url?limit=8192'},
            { test: /\.css$/, loader: ExtractTextPlugin.extract(['css-loader'])},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader', 'scss-loader?sourceMap'])},
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader']
            }
        ]
	},
    plugins: [
        new CleanPlugin({on: 'make', path: ['build']}),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),               // 允许错误不打断程序
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].[chunkhash].css'),             // css单独打包
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            },
            mangle: {
                //mangle 通过设置except数组来防止指定变量被改变 (防止指定变量被混淆)
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        //TransferWebpackPlugin
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.[hash].js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })

    ],
    resolve: {
        // 自动扩展文件名后缀，require模块时可以省略不写后缀名
        extensions: ['.js', '.json', '.css'],
        // 模块别名定义，方便后续直接引用别名
        alias: {

        }
    }
};
