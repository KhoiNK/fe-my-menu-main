const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  name: 'mfe-main',
  entry: './src/index.ts',
  output: {
    filename: 'remoteEntry.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    port: 3001,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'main',
      exposes: {
        '.': './src',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
       'react-dom': {
         requiredVersion: deps['react-dom']
        }
      },
    })
  ]
};