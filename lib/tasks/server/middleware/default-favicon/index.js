'use strict';

var debug = require('debug')('ember-cli:default-favicon');
var favicon = require('serve-favicon');
var path = require('path');

/**
 * This addon is used to serve the app (`index.html`) and
 * assets (`*.js`, `*.css`, ...) at the `baseURL` prefix.
 *
 * @class DefaultFaviconAddon
 * @constructor
 */
function DefaultFaviconAddon(project) {
  this.project = project;
  this.name = 'serve-files-middleware';
}

DefaultFaviconAddon.prototype.serverMiddleware = function(options) {
  var app = options.app;

  debug('serving default favicon.ico');

  app.use(favicon(path.join(__dirname, 'favicon.ico')));
};

module.exports = DefaultFaviconAddon;
