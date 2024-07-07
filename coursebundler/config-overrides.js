const { override, addWebpackPlugin } = require('customize-cra');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = override(
  addWebpackPlugin(
    new HtmlWebpackPlugin({
      template: './public/index.html', // Adjust the template path as per your project structure
    })
  ),
  (config) => {
    if (config.devServer) {
      config.devServer.setupMiddlewares = (middlewares, devServer) => {
        // Add your custom middleware logic here
        middlewares.unshift((req, res, next) => {
          console.log('This is custom middleware logic before webpack-dev-server setup.');
          next();
        });

        middlewares.push((req, res, next) => {
          console.log('This is custom middleware logic after webpack-dev-server setup.');
          next();
        });

        return middlewares;
      };
    }
    return config;
  }
);
