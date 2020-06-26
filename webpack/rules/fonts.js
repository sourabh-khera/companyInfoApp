
module.exports = () => ({
	test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
	use: [{
		loader: 'file-loader',
		options: {
			name: '[name].[ext]',
			outputPath: 'fonts/'
		}
	}],
});