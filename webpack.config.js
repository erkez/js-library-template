/* eslint-disable */

const Packer = require('@ekz/packer');

module.exports = Packer.webpack.createLibraryConfiguration('glg', {
    entry: './src/index.ts'
});
