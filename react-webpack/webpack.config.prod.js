const basicConfig = require('./webpack.config.basic');

module.exports = Object.assign(basicConfig, {
    mode: 'production',
})