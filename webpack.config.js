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
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin({ verbose: true })
  ]
};
