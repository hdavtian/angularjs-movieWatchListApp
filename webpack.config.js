const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node-modules',
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-2"]
        }
      },
      {
        test: /\.css$/,
        // to import into js, just uncomment `loaders`, and commentout `use`
        // loaders: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoaders=1'
        })
      },
      {
        test: /\.scss$/,
        // to import into js, just uncomment `loaders`, and commentout `use`
        // loaders: ['style-loader', 'css-loader', 'sass-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000&name=images/[name].[ext]"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader?name=images/[name].[ext]"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        //loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]',
        loader: 'url-loader',
        // url-loader documentation
        // https://github.com/webpack-contrib/url-loader
        // Can pass options either of two ways, either in url via key/value pairs
        //   or `options` object
        options: {
          limit: 10000,
          mimitype: 'image/svg+xml',
          name: 'images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
      new webpack.optimize.UglifyJsPlugin({
        test: /\.js$/,
        exclude: /node-modules/
      }),
      new ExtractTextPlugin('styles.css')
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9001
  }
}
