# hexo-tag-owl #

[![NPM version](https://badge.fury.io/js/hexo-tag-owl.svg)](http://badge.fury.io/js/hexo-tag-owl)
[![Code Climate](https://codeclimate.com/github/m80126colin/hexo-tag-owl.png)](https://codeclimate.com/github/m80126colin/hexo-tag-owl)
[![License](http://img.shields.io/npm/l/hexo-tag-owl.svg)](LICENSE.md)

An useful media tag for [Hexo] 3.x, [Demo page]

## Feature ##

* Various videos and images sources embedding
* Support videos website:
  * [Youtube](https://www.youtube.com/)
  * [Niconico](http://www.nicovideo.jp/)
  * [Bilibili](http://www.bilibili.com/)
  * [Vimeo](https://vimeo.com/)
  * [Tudou](http://www.tudou.com/)
  * [Youku](http://www.youku.com/)
* Support images sources:
  * Local images
  * Imgur

## Installation ##

Run the following command in the root directory of hexo:

```
npm install hexo-tag-owl --save
```

## Introduction ##

All components are wrapped by a `<div>` tag with several classes. All components have at least one class `.owl-media`:

```
<div class="owl-media">[component]</div>
```

## Videos ##

Every components of this category have additional class `.owl-video`.

```
<div class="owl-media owl-video">[component]</div>
```

Each videos source will add additional class `.owl-[source]`:

* Youtube: `.owl-youtube`
* Niconico: `.owl-niconico`
* Bilibili: `.owl-bilibili`
* Vimeo: `.owl-vimeo`
* Tudou: `.owl-tudou`
* Youku: `.owl-youku`

### Usage ###

```
{% owl youtube youtube_id %}
{% owl niconico niconico_id [type] %}
{% owl bilibili bilibili_id [page] %}
{% owl vimeo vimeo_id %}
{% owl tudou tudou_id %}
{% owl youku youku_id %}
```

* **youtube_id** - video id on Youtube
* **vimeo_id** - video id in Vimeo.
* Niconico
  * **niconico_id** - video id in Niconico.
  * **type** - embeded type. There are only `thumb` and `watch` two options. Default is set as `thumb`.
    * `thumb`: set nico in thumb mode with extra class `.niconico-thumb`
    * `watch`: set nico in watch mode with extra class `.niconico-watch`
* Bilibili
  * **bilibili_id** - video id in Bilibili. You can use either `av247371` or `247371`.
  * **page** - if video have several clips, you can add a number indicated the video.
* **tudou_id** - video id in Tudou.
* **youku_id** - video id in Youku. You can use either `id_XMTc3MzcxMjQw` or `XMTc3MzcxMjQw`.

### Examples ###

```
{% owl youtube YtuAOT_c2EA %}
{% owl niconico sm1494658 %}
{% owl niconico sm1494658 watch %}
{% owl bilibili av247371 %}
{% owl bilibili 247371 %}
{% owl bilibili av367901 2 %}
{% owl vimeo 5566538 %}
{% owl tudou pRsx83aRLLs %}
{% owl youku id_XMTc3MzcxMjQw %}
```

## Images ##

### Local Images ###

Insert your image from blog\'s path.

#### Usage ####

```
{% owl local image_path %}
```

* **image_path** - relative path from your blog.

#### Example ####

```
{% owl local img/img.jpg %}
{% owl local another-img.gif %}
```

## Sample Stylus ##

Because the components are lack of CSS, everyone can add some CSS for one's preference. Here is the sample CSS written in stylus:

``` stylus
// 16:9 ratio
$padding-ratio = 56.25%
// margin
$video-margin = 1rem
// nico thumb config
$nico-thumb-width = 20rem
$nico-thumb-border = 0.1rem
$nico-thumb-padding = 0.61 * $nico-thumb-width

.owl-video
  position: relative
  padding-top: $padding-ratio
  margin-top: $video-margin
  margin-bottom: $video-margin
  height: 0
  overflow: hidden
  iframe, object, embed
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    margin-top: 0
  .niconico-thumb
    position: relative
    padding-top: 0
    max-width: $nico-thumb-width
    padding-top: $nico-thumb-padding
    height: 0
    border: solid $nico-thumb-border #ccc
    iframe, object, embed
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      margin-top: 0
```

[Hexo]: https://hexo.io
[Demo page]: http://m80126colin.github.io/hexo-tag-owl-demo/