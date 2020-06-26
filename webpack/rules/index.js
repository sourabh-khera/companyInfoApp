const fonts = require('./fonts');
const images = require('./images');
const css = require('./css');
const javascript = require('./javascript');

module.exports = () => (
	[
		css(),
		fonts(),
		images(),
		javascript(),
	]
);
