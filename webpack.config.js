const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        // This is useful for hot module reloading, it tells Webpack that the resources of <script> tags are pointed to [name].js files in memory instead of on harddisk, it should be relative to contentBase in devServer
        filename: "[name].js"
    },
    devServer: {
        index: "index.html",
        hot: true,
        watchContentBase: true,
        watchOptions: {
            poll: 3000, // check if the files on file system are changed every 3 seconds
            ignored: [
                'webpack.config.js',
                'node_modules'
            ]

        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                'targets': '> 5%, not dead, last 2 versions'
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }

            /* You can leave the css processing alone, and use them like using them without Webpack
               I found that using loader to process the CSS files will require more loaders,
               If your css files include images from ohter places, then you need url-loader, futhermore,
               you may need file-loader, and since the style sheet will be placed in html files,
               you need some plugins to make them into files.

               Since I don't need to compile sass or any ohters like it or using hash tags,
               processing Javascript files is all I need or minimal requirement for now.

               If you need to include a hash in filename, then I recommand this:
               https://www.npmjs.com/package/html-webpack-plugin#
            */

            // {
            //     test: /\.css$/,
            //     use: [
            //         // Understand the difference between style-loader and css-loader
            //         // and style-loader must be placed before css-loader
            //         'style-loader',
            //         'css-loader',
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 plugins: [
            //                     AutoPrefixer
            //                 ]
            //             }
            //         }
            //     ]
            // },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devtool: "eval-source-map" // for debugging easier in development mode
};

// https://segmentfault.com/q/1010000015598957/

console.log(require.ensure);
