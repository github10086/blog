const path = require('path');
const webpack = require('webpack');

module.exports = {
	// 页面入口文件配置
	entry: {
        index: [
            'webpack-dev-server/client?http://localhost:3000/',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },
	// 入口文件输出配置
	output: {
	    publicPath: 'http://localhost:3000/',
		path: path.resolve(__dirname, './build/'),
		filename: '[name].bundle.js'
	},
	module: {
		// 加载器配置
		loaders: [
			{ test: /\.(png|jpg)$/, loader: 'url?limit=8192'},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.scss$/, loader: 'style!css!scss?sourceMap'},
            { test: /\.js[x]?$/, loader:'babel-loader?presets[]=es2015&presets[]=react', include: /src/},
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react']
            }
        ]
	},
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        // 自动扩展文件名后缀，require模块时可以省略不写后缀名
        extensions: ['.js', '.json', '.css'],
        // 模块别名定义，方便后续直接引用别名
        alias: {

        }
    }
};
