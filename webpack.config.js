const path = require('path');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  entry: [__dirname + "/src/sass/styles.sass"],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'src/css'),
  },
  module: {
    rules: [
      {
        test: /\.sass$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "styles.css",
        },
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          {
            loader: 'resolve-url-loader'
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // important for resolve-url-loader
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin({ verbose: true })
  ]
};
