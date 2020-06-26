const path = require('path');

const current_working_directory = process.cwd();
module.exports = {
	build: path.resolve(current_working_directory, 'build'),
	app: path.resolve(current_working_directory, 'client'),
	modules: path.resolve(current_working_directory, 'node_modules'),
};