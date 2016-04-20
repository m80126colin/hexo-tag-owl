var tag_list = {
  videos: {
    path: ['.', 'lib', 'videos'],
    tags: ['youtube', 'niconico', 'bilibili', 'vimeo', 'tudou', 'youku']
  },
  images: {
    path: ['.', 'lib', 'images'],
    tags: ['local']
  }
};

function optionSelector() {
  this.list = {};
}
optionSelector.prototype.register = function(tag, callback) {
  var opt = this;
  opt.list[tag] = callback;
};
optionSelector.prototype.handler  = function(tag) {
  return this.list[tag];
}

selector = new optionSelector();

Object.keys(tag_list).map(function (type) {
  var load_path = tag_list[type].path.join('/');
  tag_list[type].tags.map(function (tag) {
    selector.register( tag, require(load_path + '/' + tag) );
  })
});

var root = hexo.config.root;

hexo.extend.tag.register('owl', function (args) {
  var tag  = args[0];
  var arg  = args.slice(1);
  var func = selector.handler(tag);
  if (func)
    return func(arg, root);
  return '';
})