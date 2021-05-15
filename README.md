# Redux Shopping Cart Example

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX. See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


#package
{
  "name": "webpack-advanced-setup",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "watch": "webpack serve --config build-utils/webpack.config.js --env env=dev",
    "build": "cross-env PUBLIC_URL=\"/mfi_with_chips\"  webpack --config build-utils/webpack.config.js --env env=prod",
    "build:analyze": "npm run build -- --env addon=bundleanalyze",
    "test": "echo \"Error: no test specified\" && exit 0",
    "server:watch": "cross-env PUBLIC_URL=\"/mfi_with_chips\" cross-env ROLE_ACCESS=\"mi_admin_role\" webpack --config build-utils/webpack.config.server.js",
    "server:dev": "nodemon"
  },
  "keywords": [],
  "author": "Robin Wieruch <opensource@rwieruch.com> (https://www.robinwieruch.de)",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.12.3",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/plugin-proposal-export-default-from": "^7.12.13",
    "@babel/plugin-transform-runtime": "^7.14.2",
    "@babel/polyfill": "^7.12.1",
    "@babel/preset-env": "^7.12.1",
    "@babel/preset-react": "^7.13.13",
    "@babel/preset-typescript": "^7.13.0",
    "@babel/runtime": "^7.14.0",
    "babel-loader": "^8.1.0",
    "babel-plugin-syntax-decorators": "^6.13.0",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-decorators-legacy": "^1.3.5",
    "babel-plugin-transform-runtime": "^6.23.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^0.28.11",
    "dotenv-webpack": "^5.0.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^4.5.0",
    "postcss": "^6.0.22",
    "postcss-import": "^11.1.0",
    "postcss-loader": "^2.1.5",
    "postcss-preset-env": "^5.1.0",
    "react-hot-loader": "^4.13.0",
    "react-svg-loader": "^3.0.3",
    "style-loader": "^2.0.0",
    "webpack": "^5.3.2",
    "webpack-bundle-analyzer": "^3.9.0",
    "webpack-cli": "^4.1.0",
    "webpack-dev-server": "^3.11.0",
    "webpack-merge": "^5.3.0",
    "mini-css-extract-plugin": "^0.4.0",
    "string-replace-loader": "^2.2.0"
  },
  "dependencies": {
    "@fortawesome/fontawesome-free": "^5.3.1",
    "axios": "^0.21.1",
    "bootstrap": "^4.6.0",
    "chart.js": "2.7.2",
    "chartjs-plugin-annotation": "^0.5.7",
    "chartjs-plugin-labels": "^1.1.0",
    "cross-env": "^7.0.3",
    "i18next": "^20.2.2",
    "i18next-browser-languagedetector": "^6.1.0",
    "lodash": "^4.17.21",
    "moment": "^2.29.1",
    "nodemon": "^2.0.7",
    "perfect-scrollbar": "^1.5.0",
    "react": "^16.13.1",
    "react-datepicker": "^3.8.0",
    "react-datetime-picker": "^3.2.0",
    "react-dom": "^16.13.1",
    "react-i18next": "^11.8.15",
    "react-notification-alert": "0.0.13",
    "react-redux": "^7.2.0",
    "react-router": "^4.3.1",
    "react-router-dom": "^4.3.1",
    "reactstrap": "^8.9.0",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0"
  }
}


# server 
const fs = require('fs');
const path = require('path');
const Dotenv = require('dotenv-webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PUBLIC_URL = process.env.PUBLIC_URL || '';

// const stats = {
//   colors: true,
//   assets: true,
//   children: false,
//   chunks: false,
//   hash: false,
//   modules: false,
//   publicPath: false,
//   timings: true,
//   version: false,
//   warnings: true,
// };

// Webpack config
const config = {
  target: 'node',
  mode: 'production',
  watch: false,
  devtool: 'source-map',
  context: path.resolve(__dirname, '..', './src'),
  entry: {
    client: [
      '@babel/polyfill',
      path.resolve(__dirname, '..', './src/server.js')
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    publicPath: '/',
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
            },
          },
          'postcss-loader',
        ],
      },
      // {
      //   test: /\.svg$/,
      //   // exclude: /node_modules/,
      //   include: path.resolve(__dirname, '..', './src/assets/images'),
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //     },
      //     {
      //       loader: 'react-svg-loader',
      //       options: {
      //         svgo: {
      //           plugins: [
      //             {
      //               removeTitle: true,
      //             },
      //           ],
      //           floatPrecision: 3,
      //         },
      //       },
      //     },
      //   ]
      // },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: 'client/assets/',
              publicPath: function (path) {
                return `${PUBLIC_URL}/client/assets/${path}`;
              },
            },
          },
        ],
      },
      // Fonts
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'client/fonts/',
              publicPath: function (path) {
                return `${PUBLIC_URL}/client/fonts/${path}`;
              },
            },
          },
        ],
      },
      {
        test: /\.(csv)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'client/csv/',
              publicPath: function(path) {
                return `${PUBLIC_URL}/client/csv/${path}`;
              },
            },
          },
        ],
      },
      {
        test: /(all.min.css|paper-dashboard.min.css)$/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: `url\\("/client/`,
              replace: `url("${PUBLIC_URL}/client/`,
              flags: 'g',
              strict: true
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    alias: {        
      'react-router-dom': path.resolve(__dirname, '..', './node_modules/react-router-dom')
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, '..', './src'),
      path.resolve(__dirname, '..', './src/assets'),
      path.resolve(__dirname, '..', './src/assets/css'),
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
    new MiniCssExtractPlugin({
      filename: 'client/style.css',
    })
  ],
  // stats,
  // Fix for node modules
  externals: fs.readdirSync('node_modules').reduce((accumulator, module) => {
    const newAccumulator = accumulator;
    if (module !== '.bin') {
      newAccumulator[module] = `commonjs ${module}`;
    }

    return newAccumulator;
  }, {}),
};

module.exports = config;


# client
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PUBLIC_URL = process.env.PUBLIC_URL || '';

module.exports = {
  entry: path.resolve(__dirname, '..', './src/client.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.svg$/,
      //   // exclude: /node_modules/,
      //   include: path.resolve(__dirname, '..', './src/assets/images'),
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //     },
      //     {
      //       loader: 'react-svg-loader',
      //       options: {
      //         svgo: {
      //           plugins: [
      //             {
      //               removeTitle: true,
      //             },
      //           ],
      //           floatPrecision: 3,
      //         },
      //       },
      //     },
      //   ]
      // },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: 'client/assets/',
              publicPath: function(path) {
                return `${PUBLIC_URL}/client/assets/${path}`;
              },
            },
          },
        ],
      },
      // Fonts
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'client/fonts/',
              publicPath: function(path) {
                return `${PUBLIC_URL}/client/fonts/${path}`;
              },
            },
          },
        ],
      },
      {
        test: /\.(csv)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'client/csv/',
              publicPath: function(path) {
                return `${PUBLIC_URL}/client/csv/${path}`;
              },
            },
          },
        ],
      },
      {
        test: /(all.min.css|paper-dashboard.min.css)$/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: `url\\("/client/`,
              replace: `url("${PUBLIC_URL}/client/`,
              flags: 'g',
              strict: true
            },
          },
        ],
      },
      
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'client/style.css',
    })
  ],
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'client/bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
  },
};

# prod
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    })
  ],
  devtool: 'source-map',
};

# merger
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const getAddons = (addonsArgs) => {
  let addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  return addons
    .filter(Boolean)
    .map((name) => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon));
};



