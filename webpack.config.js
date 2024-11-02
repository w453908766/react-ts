const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [{
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-react-app'],
      },
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  externals: ["xmlhttprequest-ts"]
};