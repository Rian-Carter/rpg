const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
devtool: 'eval-source-map',  
devServer: {                 
  contentBase: './dist'      
},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'rpg',
      template: './src/index.html', 
      inject: 'body'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/rpgui/img/*', to: './assets/images/img/[name].[ext]'},
        { from: './src/rpgui/img/icons/*', to: './assets/images/img/icons/[name].[ext]'},
        { from: './src/rpgui/img/cursor/*', to: './assets/images/img/cursor/[name].[ext]'},
        { from: './src/img/*', to: './assets/images/img/[name].[ext]'},
        { from: './src/sound/*', to: './assets/sound/[name].[ext]'},
        
      ]
    })
  ],
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: {
            globalName: "$",
            override: true,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules|rpgui/,
        loader: "eslint-loader"
      },
      {
        test: /\.(css|min.js)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      }
    ]
  }
};
