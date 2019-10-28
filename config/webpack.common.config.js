const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: { extensions: [ '.js', '.ts' ] },
  devtool: 'eval-source-map',
  devServer: {
    stats: 'minimal'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Citrus UI',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/images', to: 'assets/images' }
    ]),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      // ----------------------- Pure Javascript files -------------------------
      {
        test: [ /\.js$/ ],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: { presets: [ '@babel/preset-env' ] }
        }
      },
      // -------------------------- Typescript files ---------------------------
      {
        test: [ /\.ts$/ ],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: { presets: [ '@babel/preset-env', '@babel/typescript' ] }
        }
      },
      // ------------------------- Global SASS files ---------------------------
      {
        test: [/\.sass$/],
        exclude: /\.module\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: `@import "${path.resolve(__dirname, '../src/assets/style')}/common.module.sass"`
            }
          }
        ]
      },
      // ------------------------- Modular SASS files --------------------------
      {
        test: [/\.module\.sass$/],
        use: [
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: `@import "${path.resolve(__dirname, '../src/assets/style')}/common.module.sass"`
            }
          }
        ]
      },
      // --------------------------- Static Assets -----------------------------
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]', outputPath: 'assets/images' }
          }
        ]
      }
    ]
  }
}
