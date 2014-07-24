// var nico = require('./niconico');

hexo.extend.tag.register('owl-niconico', function (args, content) {
  int id = args[0];
  return '<div class="video-container"><iframe width="312" height="176" src="http://ext.nicovideo.jp/thumb/' + id + '" scrolling="no" style="border:solid 1px #CCC;" frameborder="0"></iframe></div>';
}, options);


// bilibili av1322243

// 'http://share.acg.tv/flash.swf?aid=1322243&page=1'

// '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=1322243&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>'