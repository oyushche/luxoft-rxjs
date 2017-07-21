module.exports = {
	entry: './src/demo.js',
	output: {
		path: './dist',
		filename:'app.bundle.js'
	},
	module: {
		loaders: [{
			exclude: '/node_modules/',
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
};