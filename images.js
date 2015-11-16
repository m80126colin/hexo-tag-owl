module.exports.local = function (args) {
  var path   = args[0];
  var res = [];
  res.push('<div class="owl-media owl-image owl-local-image">');
  res.push('<img src="' + path + '" />');
  res.push('</div>');
  return res.join('');
}