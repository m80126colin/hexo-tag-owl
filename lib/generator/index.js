'use strict';

var fs     = require('fs');
var path   = require('path');
var stylus = require('stylus');

/**
 * Generator: owl
 *
 *   A hexo generator plugin. Used to generate default css writen in
 * Stylus for owl tags.
**/
module.exports = function(locals) {
  var ctx     = this;
  var option  = ctx.config.owl || {};
  // option configure
  option.css  = option.css || 'none';
  option.file = (option.file || 'owl') + '.css';
  // generate
  if ('none' !== option.css) {
    var str = fs.readFileSync(
      path.join(__dirname, '../asset/css.styl'),
      { encoding: 'utf8' });
    return {
      path: option.file,
      data: stylus.render(str)
    }
  }
  return {}
}