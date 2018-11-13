const webpack = require('webpack');
const path = require('path');
module.exports = {
	/*	externals: {
			"styled-components": {
				commonjs: "styled-components",
				commonjs2: "styled-components",
				amd: "styled-components",
			},
		},*/
	entry: './src/index.js',
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(jpg|png|gif|svg|pdf|ico)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name]-[hash:8].[ext]'
					},
				}, ]
			},
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			'styled-components': path.resolve('./node_modules/styled-components')
		}
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
};