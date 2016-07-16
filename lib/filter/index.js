'use strict';

var fs       = require('fs');
var path     = require('path');
var optioner = require('../util/optioner');

/**
 * Description:
 *
 *   Insert default stylesheet for hexo-tag-owl components.
 *
 * Options:
 *
 *   (option) - (default value)
 *
 *   css      - 'none'
 *     whether use default stylesheet or not. default stylesheet is
 *   in ../asset/css.styl
 *
 *   file     - config.root + 'owl.css'
 *     path of css file
**/
module.exports = function(data) {
  var ctx    = this;
  var option = optioner(ctx.config.owl);
  if ('none' !== option.css) {
    data.content = '<link rel="stylesheet" href="' + ctx.config.root + option.file + '">' + data.content;
  }
  return data;
}