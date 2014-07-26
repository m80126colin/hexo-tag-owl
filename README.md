# hexo-tag-owl

An tag about Hexo with media plug-in.

# Installation

Run the following command in the root directory of hexo:

```
npm install hexo-tag-owl --save
```

# Introduction

All components are wrapped by a `<div>` tag with class `owl-media` like:

```
<div class="owl-media">[component]</div>
```

## Videos

Every components of this category have additional class `owl-video` like:

```
<div class="owl-media owl-video">[component]</div>
```

### Youtube

This component has addition class `owl-youtube`.

#### Usage

```
{% owl-youtube [youtube id] %}
```

* ** youtube id **: video id on youtube

#### Example

```
{% owl-youtube YtuAOT_c2EA %}
```

### Niconico

#### Usage

```
{% owl-niconico [niconico id] [type] %}
```

#### Example

```
{% owl-niconico sm1494658 %}
```

```
```