/**
 *
 * @param {string} appName
 * @param {string} description
 * @param {string} author
 * @param {string} sourceFolder
 * @returns {string}
 * @constructor
 */
export const PackageJson = (appName: string, description: string, author: string, sourceFolder: string) => {

  return `{
  "name": "${appName}",
  "version": "1.0.0",
  "description": "${description}",
  "main": "${sourceFolder}/app/index.module.ts",
  "scripts": {
    "clean": "rimraf dist",
    "serve": "webpack-dev-server --open --progress",
    "build": "cross-env NODE_ENV=dev webpack -p --progress",
    "lint:ts": "tslint --project tslint.json ${sourceFolder}/app/**/*.ts",
    "lint:scss": "sass-lint --format unix -v",
    "build:prod": "cross-env NODE_ENV=production webpack -p --progress"
  },
  "author": "${author}",
  "license": "MIT",
  "dependencies": {
    "@uirouter/angularjs": "^1.0.15"
  },
  "devDependencies": {
    "@types/angular": "^1.6.43",
    "@types/node": "^9.4.6",
    "autoprefixer": "^8.1.0",
    "clean-webpack-plugin": "^0.1.18",
    "copy-webpack-plugin": "^4.5.0",
    "cross-env": "^5.1.3",
    "css-loader": "^0.28.10",
    "cssnano": "^3.10.0",
    "expose-loader": "^0.7.4",
    "extract-text-webpack-plugin": "^3.0.2",
    "fast-sass-loader": "^1.4.0",
    "file-loader": "^1.1.11",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.0.4",
    "http-proxy-middleware": "^0.17.4",
    "json-loader": "^0.5.7",
    "license-webpack-plugin": "^1.2.3",
    "ng-annotate-webpack-plugin": "^0.2.1-pre",
    "ngtemplate-loader": "^2.0.1",
    "node-sass": "^4.7.2",
    "nodemon": "^1.17.1",
    "postcss-loader": "^2.1.1",
    "progress-bar-webpack-plugin": "^1.11.0",
    "requirejs": "^2.3.5",
    "rimraf": "^2.6.2",
    "sass-lint": "^1.12.1",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.20.2",
    "ts-loader": "3.1.1",
    "ts-node": "^5.0.1",
    "tslint": "^5.9.1",
    "typescript": "^2.7.2",
    "webpack": "3.8.1",
    "webpack-dev-server": "2.9.4",
    "yargs": "^11.0.0"
  }
}
`;

};
