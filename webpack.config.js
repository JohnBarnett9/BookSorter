const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
	  filename: '[name].bundle.js',
	  path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
			
		]
	}
};