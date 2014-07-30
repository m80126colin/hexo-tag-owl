var videos = require('./videos')
var images = require('./images')
// videos
hexo.extend.tag.register('owl-youtube', videos.youtube);
hexo.extend.tag.register('owl-niconico', videos.niconico);
hexo.extend.tag.register('owl-bilibili', videos.bilibili);
hexo.extend.tag.register('owl-vimeo', videos.vimeo);
hexo.extend.tag.register('owl-tudou', videos.tudou);
hexo.extend.tag.register('owl-youku', videos.youku);
// images
hexo.extend.tag.register('owl-img', images.local)