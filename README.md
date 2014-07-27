# hexo-tag-owl #

A tag about [Hexo] with media plug-in.

## Feature ##

Support video embeded:

* Youtube
* Niconico
* Bilibili
* Vimeo
* Tudou
* Youku

# Installation #

Run the following command in the root directory of hexo:

```
npm install hexo-tag-owl --save
```

# Introduction #

All components are wrapped by a `<div>` tag with several classes. All components have at least a class `owl-media`:

```
<div class="owl-media">[component]</div>
```

## Videos ##

Every components of this category have additional class `owl-video`:

```
<div class="owl-media owl-video">[component]</div>
```

### Youtube ###

This component has addition class `owl-youtube`.

#### Usage ####

```
{% owl-youtube [youtube id] %}
```

* **youtube id** - video id on Youtube

#### Example ####

```
{% owl-youtube YtuAOT_c2EA %}
```

### Niconico ###

This component has addition class `owl-niconico`.

#### Usage ####

```
{% owl-niconico [niconico id] [type] %}
```

* **niconico id** - video id in Niconico.
* **type** - embeded type. There are only `thumb` and `watch` two options. Default is set as `thumb`.
    * `thumb`: set nico in thumb mode with extra class `niconico-thumb`
    * `watch`: set nico in watch mode with extra class `niconico-watch`

#### Example ####

```
{% owl-niconico sm1494658 %}
{% owl-niconico sm1494658 watch %}
```

### Bilibili ###

This component has addition class `owl-bilibili`.

#### Usage ####

```
{% owl-bilibili [bilibili id] %}
```

* **bilibili id** - video id in Bilibili. You can use either `av247371` or `247371`.

#### Example ####

```
{% owl-bilibili av247371 %}
{% owl-bilibili 247371 %}
```

### Vimeo ###

This component has addition class `owl-vimeo`.

#### Usage ####

```
{% owl-vimeo [vimeo id] %}
```

* **vimeo id** - video id in Vimeo.

#### Example ####

```
{% owl-vimeo 5566538 %}
```

### Tudou ###

This component has addition class `owl-tudou`.

#### Usage ####

```
{% owl-tudou [tudou id] %}
```

* **tudou id** - video id in Tudou.

#### Example ####

```
{% owl-tudou pRsx83aRLLs %}
```

### Youku ###

This component has addition class `owl-youku`.

#### Usage ####

```
{% owl-youku [youku id] %}
```

* **youku id** - video id in Youku. You can use either `id_XMTc3MzcxMjQw` or `XMTc3MzcxMjQw`.

#### Example ####

```
{% owl-youku id_XMTc3MzcxMjQw %}
```

# Sample Stylus #

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

[Hexo]: http://hexo.io
