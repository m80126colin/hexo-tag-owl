'use strict';

var config  = require('./config');

// bilibili
module.exports = function (hexo, args) {
  var id   = args[0].match(/^(av|)(\d+)$/),
      page = args[1] || '1';
  if (null === id)
    throw 'error! incorrect bilibibli id.';
  return '<div class="owl-media owl-video owl-bilibili"><iframe id="bilibili'+id[2]+'" src="//player.bilibili.com/player.html?aid=' + id[2] + '&cid=?@cid&page=' + page + '" scrolling="no" border="0" frameborder="no" framespacing="0" ' + config.embed + '> </iframe></div>'+
  '<script>var getJSON = function(url, callback) {var xhr = new XMLHttpRequest();xhr.open(\'get\', url, true);xhr.responseType = \'json\';xhr.onload = function() {var status = xhr.status;if (status == 200) {callback(null, xhr.response);} else {callback(status);}};xhr.send();};getJSON("https://www.bilibili.com/widget/getPageList?aid='+id[2]+'",function(err,data){var cid=data[0][\'cid\'];document.getElementById("bilibili'+id[2]+'").src=document.getElementById("bilibili'+id[2]+'").src.replace("?@cid",cid);});</script>'
  ;
}