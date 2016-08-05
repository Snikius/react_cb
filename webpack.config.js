var webpack = require("webpack");

module.exports = {
    entry: [
        //"bootstrap-loader/extractStyles",
        './src/app.tsx'
    ],
    // Turn on sourcemaps
    devtool: 'source-map',
    output: {
        filename: 'app.js',
        path: __dirname + "/build",
        publicPath: "/build/"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },

    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file' },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
}