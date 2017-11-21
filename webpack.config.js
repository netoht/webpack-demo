// import
const
path = require('path'),
webpack = require('webpack'),
CleanWebpackPlugin = require('clean-webpack-plugin')
CopyWebpackPlugin = require('copy-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),

// config
cleanDist = new CleanWebpackPlugin(['dist']),
copyFiles = new CopyWebpackPlugin([
  { from: './index.html' }
]),
extractLESS = new ExtractTextPlugin('assets/css/app.css'),
extractFontAwesome = new ExtractTextPlugin('assets/css/font-awesome.css'),
extractSASSBulma = new ExtractTextPlugin('assets/css/bulma.css')

// webpack
module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      // images
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/img/',
              publicPath: '/'
            }
          }
        ],
      },

      // fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts/',
              publicPath: '/'
            }
          }
        ],
      },

      // css,less
      {
        test: /\.(css|less)$/,
        include: /src/,
        use: extractLESS.extract({
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'less-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },

      // sass bulma
      {
        test: /\.s[ac]ss$/,
        include: /Bulma.sass/,
        use: extractSASSBulma.extract({
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },

      // less font-awesome
      {
        test: /\.less$/,
        include: /font-awesome/,
        use: extractFontAwesome.extract({
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'less-loader'
            }
          ],
          fallback: 'style-loader'
        })
      }
    ],
  },
  plugins: [
    cleanDist,
    copyFiles,
    extractLESS,
    extractFontAwesome,
    extractSASSBulma
  ]
}
