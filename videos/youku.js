var config = require('../config/iframe.config');
// ------------------------------------
// youku
// ------------------------------------
module.exports = function (args, content) {
  var id = args[0].match(/^(id_|)(.+)$/);
  return '<div class="owl-media owl-video owl-youku"><iframe src="http://player.youku.com/embed/' + id[2] + '" ' + config + '></iframe></div>';
}