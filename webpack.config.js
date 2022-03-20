const path = require('path');

module.exports = {
  entry: './src/index.js',  // codesplitting can be done here as entry: {entry1: '...', entry2: '...'}
  output: {
    filename: 'awesome.js',
    path: path.resolve(__dirname, 'dist'),
  }
};