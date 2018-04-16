var debug = process.envNODE_ENV !== "production";

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


var path = require('path');

var srcPath = path.join(__dirname, 'source');
var buildPath = path.join(__dirname, 'public');

module.exports = {
  context: srcPath,
  entry: {
    applicationHome: path.join(srcPath, 'js', 'application.js'),
    vendor: ["jquery", "react", "axios"]
  },
  output: {
      path: buildPath,
      filename: "./js/bundle--[name].js"
  },
  devServer: {
    contentBase: buildPath,
    stats: 'errors-only',
    open: true,
    port: 12000,
    compress: true
  },
  devtool: 'inline-source-map',
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?publicPath=../&name=./fonts/[name].[ext]'
      }, 
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.json$/, 
        loader: "json-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    //new CleanWebpackPlugin(['public']),
    new CommonsPlugin({
      name: "vendor",
      filename: "./js/bundle--vendor.js"
    }),
    new ExtractTextPlugin("./css/[name].css")
  ]
};
