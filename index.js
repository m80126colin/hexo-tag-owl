var videos = require('./videos');
var images = require('./images');
// videos
hexo.extend.tag.register('owl_youtube',  videos.youtube);
hexo.extend.tag.register('owl_niconico', videos.niconico);
hexo.extend.tag.register('owl_bilibili', videos.bilibili);
hexo.extend.tag.register('owl_vimeo',    videos.vimeo);
hexo.extend.tag.register('owl_tudou',    videos.tudou);
hexo.extend.tag.register('owl_youku',    videos.youku);
// images
// hexo.extend.tag.register('owl_img',      images.local)