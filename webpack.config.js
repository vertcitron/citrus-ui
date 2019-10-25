const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
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
    })
  ],
  module: {
    rules: [
      {
        test: [ /\.js$/ ],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      },
      {
        test: [ /\.ts$/ ],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/typescript' ]
          }
        }
      },
      {
        test: [/\.sass$/],
        exclude: /\.module\.sass$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: [/\.module\.sass$/],
        use: [ 'css-loader', 'sass-loader' ]
      }
    ]
  }
}
