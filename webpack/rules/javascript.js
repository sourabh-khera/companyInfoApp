const PATHS = require('../paths');

module.exports = () => ({
	test: /\.js$/,
	loader: 'babel-loader',
	exclude: PATHS.modules,
});