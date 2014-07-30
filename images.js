var htmlTag = hexo.util.html_tag;

module.exports.local = function (args, content) {
  var img_path = args[0];
  img_config       = {};
  img_config.src   = hexo.config.root + img_path;
  img_config.class = '';
  return htmlTag('img', img_config);
}