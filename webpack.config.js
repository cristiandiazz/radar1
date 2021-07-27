const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.svg$/i,
				use: [
					{
						loader: 'url-loader'
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	]
};