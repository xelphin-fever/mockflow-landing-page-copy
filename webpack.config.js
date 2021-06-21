// npm install --save-dev style-loader css-loader
// npm install --save-dev sass-loader node-sass


const path = require('path');
module.exports = {
  entry: './src/index.js', //path of entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
 
};
