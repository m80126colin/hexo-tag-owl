'use strict';

var config  = require('./config');

// bilibili
/* Example
aid
https://player.bilibili.com/player.html?aid=54770636&page=1

bvid
https://player.bilibili.com/player.html?bvid=BV14b41177YA 
*/
module.exports = function (hexo, args) {
  //args[0] : av54770636  | BV14b41177YA  |  54770636
  //     id : av54770636,av,54770636 | BV14b41177YA,BV,14b41177YA  | av54770636,,54770636
  //          id[0] : av54770636
  //          id[1] : av
  //          id[2] : 54770636
  var id   = args[0].match(/^(av|bv|)(.*)$/i),
      page = args[1] || '1',
      height = args[2] || 452,
      width = args[3] ||544;
  // console.log('id:' + id);
  // console.log('id[0]:' + id[0]);
  // console.log('id[1]:' + id[0]);
  // console.log('id[2]:' + id[2]); 
  let idArg;
  if (id[1] != null  && id[1].toLowerCase() == 'bv'){
	  idArg = 'bvid=' + id[0];
  } 
  if (id[1] != null  && id[1].toLowerCase() == 'av'){
	  idArg = 'aid=' + id[2];
  } 
  if (id[1] == ''){
	  idArg = 'aid=' + id[2];
  } 
  // console.log('idArg:' + idArg);
  if (null === id) throw 'error! incorrect bilibibli id.';  
  return '<iframe src="https://player.bilibili.com/player.html?'
	  + idArg
	  + '&page='
	  + page
	  + '&as_wide=1&high_quality=1&danmaku=0" '
      + ' width="'
      + width
      + '" height="'
      + height
      + '" ' 
	  + config.iframe + ' > </iframe>';
}