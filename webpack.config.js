const path = require('path');

module.exports = {
    
    entry: './src/demo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    }
};
