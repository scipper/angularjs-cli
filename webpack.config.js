const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const LicenseWebpackPlugin = require("license-webpack-plugin").LicenseWebpackPlugin;
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const MATCH_ALL_NON_RELATIVE_IMPORTS = /^\w.*$/i;

let prod = false;
if(process.env.NODE_ENV === "production") {
  prod = true;
}

let plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.HashedModuleIdsPlugin({
    hashFunction: "sha256",
    hashDigest: "hex",
    hashDigestLength: 10
  })
];

if(prod) {
  plugins.unshift(new CleanWebpackPlugin(["dist"]));

  plugins.push(new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: false
    },
    compress: {
      screw_ie8: true
    },
    comments: false
  }));
  plugins.push(new LicenseWebpackPlugin({
    pattern: /.*/,
    unacceptablePattern: /GPL/,
    abortOnUnacceptableLicense: true,
    addBanner: true,
    perChunkOutput: false
  }));
} else {
  plugins.push(new ProgressBarPlugin({
    clear: false
  }));
}

module.exports = {

  entry: {
    app: "./src/main.ts"
  },

  output: {
    filename: prod ? "ngjs.js" : "angularjs-cli.bundle.js",
    path: path.resolve(__dirname, prod ? "bin" : "dist"),
    pathinfo: !prod,
    library: "ngjs",
    libraryTarget: "commonjs2"
  },

  target: "node",

  devtool: prod ? false : "eval-source-map",

  cache: true,

  stats: {
    assets: false,
    colors: true,
    errors: true,
    errorDetails: true,
    exclude: [/node_modules/],
    hash: true,
    modules: false,
    performance: true,
    reasons: true,
    timings: true,
    warnings: true
  },

  watch: !prod,

  resolve: {
    unsafeCache: true,
    extensions: [".ts", ".js"]
  },

  module: {

    rules: [
      {
        test: /\.ts|\.js?$/,
        exclude: /node_modules/,
        use: [
          {loader: "ts-loader"}
        ]
      }
    ]

  },

  node: {
    __dirname: false,
    __filename: false,
  },

  externals: [MATCH_ALL_NON_RELATIVE_IMPORTS],

  plugins: plugins

};