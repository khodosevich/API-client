const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env,argv) => {

    console.log("Application webpack mode is " , argv.mode);

    return{
        mode: argv.mode,
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'built')
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'built')
            },
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    },

                },
                {
                    test: /\.html$/,
                    use: ['html-loader'],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
            }),
        ],

        optimization: argv.mode === "production" ? {
            minimize: true,
            minimizer:[
                new TerserPlugin ({
                    terserOptions: {
                        output:{
                            comments: false,
                        },
                    },
                    extractComments:false
                })
            ]
        } : {},
    }
};
