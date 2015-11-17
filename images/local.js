var util = require('hexo-util');
var path = require('path');

module.exports = function (args, root) {
  var img_path = args[0];
  var config  = {
    src: root + img_path
  }
  return util.htmlTag('img', config);
}