const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({production = false}) => {
	if(production){
		return [
			new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			}),
			new HtmlWebpackPlugin({
				template: 'client/index.html',
			}),
		];
	} else {
		return [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			}),
			new HtmlWebpackPlugin({
				template: 'client/index.html',
			}),
		];
	}

};