'use strict';

var config  = require('./config');
// tudou
module.exports = function (hexo, args) {
  var id = args[0];
  return '<div class="owl-media owl-video owl-tudou"><iframe width="100%" height="100%" frameborder="0" src="http://www.tudou.com/programs/view/html5embed.action?code=id" ' + config.embed + '></iframe></div>';
}