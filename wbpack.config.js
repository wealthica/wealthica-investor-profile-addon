const webpackConfig = require("path");

module.exports = {
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true, // optional
            },
          },
        },
      ],
    },
  ],
  resolve: {
    extensions: [".js", ".json", ".vue"],
    root: webpackConfig.resolve(__dirname),
    alias: {
      "@": webpackConfig.resolve(
        `${__dirname}/src`
      ),
      "~": webpackConfig.resolve(
        `${__dirname}/src`
      )
    }
  }
};
