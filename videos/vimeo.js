var config = require('../config/iframe.config');
// ------------------------------------
// vimeo
// ------------------------------------
module.exports = function (args, content) {
  var id = args[0];
  return '<div class="owl-media owl-video owl-vimeo"><iframe src="//player.vimeo.com/video/' + id + '" ' + config + '></iframe></div>';
}