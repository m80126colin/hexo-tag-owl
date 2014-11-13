var tag    = hexo.extend.tag;
// videos
tag.register('owl-youtube',  require('./videos/youtube'));
tag.register('owl-niconico', require('./videos/niconico'));
tag.register('owl-bilibili', require('./videos/bilibili'));
tag.register('owl-vimeo',    require('./videos/vimeo'));
tag.register('owl-tudou',    require('./videos/tudou'));
tag.register('owl-youku',    require('./videos/youku'));
// images
tag.register('owl-img',      require('./images/local'));