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

* **youtube id** - video id on youtube

#### Example ####

```
{% owl-youtube YtuAOT_c2EA %}
```

### Niconico ###

#### Usage ####

```
{% owl-niconico [niconico id] [type] %}
```

* **niconico id** - video id in niconico. you can input both `sm1494658` or `1494658`
* **type** - embeded type. There are only `thumb` and `watch` two options. Default is set as `thumb`.

#### Example ####

```
{% owl-niconico sm1494658 %}
{% owl-niconico sm1494658 watch %}
```

### Bilibili ###

#### Usage ####

```
{% owl-bilibili [bilibili id] %}
```

* **bilibili id** -

#### Example ####