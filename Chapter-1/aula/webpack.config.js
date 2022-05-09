const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  // o modo de tradução.
  mode: isDevelopment ? 'development' : 'production',
  // para mapear corretamente o local do erro
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  // entrada e saída dos arquivos
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // extensões permitidas
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  // atualizar automaticamente o webpack a cada alteração
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    hot: true
  },

  // plugins
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),

  // regras para importações
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/, // a pasta node modules n deve sofrer alteração pro parte do webpack e do babel porque os proprios desenvolvedores do pacote devem se preocupar com isso
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, // a pasta node modules n deve sofrer alteração pro parte do webpack e do babel porque os proprios desenvolvedores do pacote devem se preocupar com isso
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
