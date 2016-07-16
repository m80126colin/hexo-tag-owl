'use strict';

var fs      = require('fs');
var path    = require('path');

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
  var option = ctx.config.owl || {};
  // option configure
  option.css  = option.css || 'none';
  option.file = ctx.config.root + (option.file || 'owl') + '.css';
  if ('none' !== option.css) {
    data.content = '<link rel="stylesheet" href="' + option.file + '">' + data.content;
  }
  return data;
}