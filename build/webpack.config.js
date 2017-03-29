process.noDeprecation = true;

const ENV = process.env.ENV;

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let colors = require("colors");
let apiService = require('./api');

console.log(('Building the ' + ENV + ' environment code').yellow);
//api service
if (ENV === 'development') {
  apiService(function () {
    console.log(('api service is listening at port 3000').yellow);
  });
}

module.exports = {
  plugins: [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      favicon: './src/assets/images/favicon.png',
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        minifyJS: false,
        minifyCSS: false
      },
      hash: true
    }),
    new webpack.DefinePlugin({
      '__ENV__': JSON.stringify(ENV)
    }),
  ],
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../web'),
    filename: '[name].js',
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|woff|svg|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './web/',
    inline: true,
    open: true,
    port: 8800
  },
  devtool: '#eval-source-map'
};

if (ENV !== 'development') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
