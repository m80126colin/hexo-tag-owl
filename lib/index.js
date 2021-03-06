'use strict';

var selector  = require('./tag');
var generator = require('./generator');
var filter    = require('./filter');

/**
 * Tag Plugin: owl
 *   Provide media plugins.
**/
hexo.extend.tag.register('owl', function (args) {
  // arguments
  var tag  = args[0];
  var arg  = args.slice(1);
  var func = selector[tag];
  if (func)
    return func(hexo, arg);
  return '';
})

/**
 * Generator and Filter Plugins: owl
 *   Insert default stylesheet for hexo-tag-owl components.
**/
hexo.extend.generator.register('owl', generator);
hexo.extend.filter.register('after_post_render', filter);