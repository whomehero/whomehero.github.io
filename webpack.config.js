// Document: https://webpack.js.org/configuration/

const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.ts'), // string | object | array
    // defaults to ./src
    // Here the application starts executing
    // and webpack starts bundling

    output: {
        // options related to how webpack emits results
        
        path: path.join(__dirname, 'dist'), // string (default)
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)

        filename: '[name].js', // string (default)
        // the filename template for entry chunks
    },

    module: {
        // configuration regarding modules
        rules: [
            // rules for modules (configure loaders, parser options, etc.)
            {
                // Actions:
                loader: 'ts-loader',
                // the loader which should be applied, it'll be resolved relative to the context

                // Conditions:
                test: /\.ts$/,
            },
        ]
    },

    resolve: {
        // options for resolving module requests
        // (does not apply to resolving of loaders)

        extensions: ['.ts', '.js']
        // extensions that are used
    },

    devServer: {
        static: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        open: true
    },
}