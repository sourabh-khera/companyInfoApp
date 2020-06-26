const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
	test: /\.(sc|c)ss$/,
	use: [
		{loader: MiniCssExtractPlugin.loader},
		{
			loader: 'css-loader',
			options: {
				modules: {
	        localIdentName: "[name]__[local]___[hash:base64:5]",
	      },														
			},
		},
		{
			loader: 'sass-loader',
		},
	]
});