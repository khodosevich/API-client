const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { Configuration } = require('webpack');

module.exports = (env,argv) => {

    console.log("Application webpack mode is " , argv.mode);

    const config: Configuration = {
        mode: argv.mode,
        entry: './src/index.tsx',
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
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader'
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx','.ts','.tsx']
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

    return config;
};
