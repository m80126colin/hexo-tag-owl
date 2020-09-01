'use strict';

var fs       = require('fs');
var path     = require('path');
var optioner = require('../util/optioner');

/**
 * Filter: owl
 *
 *   Insert default stylesheet for hexo-tag-owl components.
**/
module.exports = function(data) {
  var ctx    = this;
  var option = optioner(ctx.config.owl);
  if ('none' !== option.css && option.file != null) {
    data.content = '<link rel="stylesheet" href="' + ctx.config.root + option.file + '">' + data.content;
  }
  return data;
}