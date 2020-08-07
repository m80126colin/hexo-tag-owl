'use strict';

var config = require('./config');
// youku
module.exports = function (hexo, args) {
  var id = args[0].match(/^(id_|)(.+)$/),
      height = args[1] || '470px',
      width = args[2] || '100%';  
  return '<iframe src="https://player.youku.com/embed/' 
         + id[2] 
		 + '" ' 
		 + config.iframe 
		 + ' style="height: ' + height + ' !important;width: ' + width + ' !important;"'
		 + '></iframe>';
}