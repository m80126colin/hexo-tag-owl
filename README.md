# hexo-tag-owl #

An tag about Hexo with media plug-in.

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

* **bilibili id** - video id in Bilibili. You can input both `av247371` and `247371`.

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

* **youku id** - video id in Youku. You can input both `id_XMTc3MzcxMjQw` and `XMTc3MzcxMjQw`.

#### Example ####

```
{% owl-youku id_XMTc3MzcxMjQw %}
```
