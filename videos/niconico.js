var config = require('../config/iframe.config');
// ------------------------------------
// niconico
// ------------------------------------
module.exports = function (args, content) {
  var id   = args[0],
      type = args[1] || 'thumb',
      res  = '';
  if (type == 'thumb') {
  	// thumb
    res += '<div class="owl-media owl-video owl-niconico niconico-thumb"><iframe src="http://ext.nicovideo.jp/thumb/' + id + '" scrolling="no" ' + config + '></iframe></div>';
  }
  else {
    // watch
    res += '<div class="owl-media owl-video owl-niconico niconico-watch"><script type="text/javascript" src="http://ext.nicovideo.jp/thumb_watch/' + id + '"></script></div>';
  }
  return res;
}