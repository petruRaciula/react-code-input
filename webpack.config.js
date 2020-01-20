const path = require('path');

module.exports = [
    {
        entry:     './src/ReactCodeInput.jsx',
        devtool:   'source-map',
        mode:      'production',
        output:    {
            path:          path.resolve(__dirname, 'dist'),
            globalObject: 'typeof self !== \'undefined\' ? self : this',
            filename:      'ReactCodeInput.js',
            libraryTarget: 'umd',
            library:       'ReactCodeInput',
        },
        module:    {
            rules: [
                {
                    test:    /\.(js|jsx)$/,
                    use:     ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.json$/,
                    use:  'json-loader',
                },
                {
                    test: /\.css$/,
                    use:  ['css', 'sass'],
                },
            ],
        },
        externals: {
            react: 'react',
        },
    }
];
