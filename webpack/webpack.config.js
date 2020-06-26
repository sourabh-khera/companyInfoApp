const rules = require('./rules');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const plugins = require('../webpack/plugins');
const PATHS = require('./paths');

console.log(`Running webpack in ${process.env.NODE_ENV}`);

module.exports = () => {
	const isProduction = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';

	const devConfig = {
		mode: 'development',
		entry: PATHS.app,
		output: {
			path: PATHS.build,
			filename: 'bundle.js',
		},
		devtool: 'inline-source-map',
		module: { rules: rules() },
		plugins: plugins({ production: false }),
		optimization: {
			minimizer: [new UglifyJsPlugin()],
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true,
					},
				},
			},
		},
		devServer: {
			contentBase: PATHS.build,
			compress: true,
			hot: true,
			port: 3000,
		}
	};

	const prodConfig = {
		mode: 'production',
		entry: PATHS.app,
		output: {
			path: PATHS.build,
			filename: 'bundle.js',
			chunkFilename: '[name].js'
		},
		module: { rules: rules() },
		plugins: plugins({ production: true }),
		optimization: {
			minimizer: [new UglifyJsPlugin()],
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true,
					},
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendor',
						chunks: 'all'
					}
				},
			}
		}
	}
	const configuration = isProduction ? prodConfig : devConfig;

	return configuration;
};
