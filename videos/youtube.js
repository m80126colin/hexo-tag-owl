var config = require('../config/iframe.config');
// ------------------------------------
// youtube 9:16
// ------------------------------------
module.exports = function (args, content) {
  var id = args[0];
  return '<div class="owl-media owl-video owl-youtube"><iframe src="//www.youtube.com/embed/' + id + '" ' + config + '></iframe></div>';
}