var config  = require('../config/embed.config');
// ------------------------------------
// bilibili
// ------------------------------------
module.exports = function (args) {
  var id   = args[0].match(/^(av|)(\d+)$/),
      page = args[1] || '1';
  if (id == null)
    throw 'error! incorrect bilibibli id.';
  return '<div class="owl-media owl-video owl-bilibili"><embed  src="http://static.hdslb.com/miniloader.swf" flashvars="aid=' + id[2] + '&page=' + page + '" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" ' + config + '></embed></div>';
}