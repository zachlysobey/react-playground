const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015'],
              plugins: ['transform-class-properties']
            }
          }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React Playground',
        template: 'src/index.html'
      })
    ]
};

