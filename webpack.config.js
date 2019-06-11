var path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		library: "",      
        libraryTarget: "commonjs"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|dist)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|dist)/,
				use: {
					loader: "css-loader"
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	externals: {
		react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        }
	}
};