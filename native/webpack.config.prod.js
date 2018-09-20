const devConfig = require('./webpack.config');


module.exports = Object.assign({}, devConfig, {mode: "production"});