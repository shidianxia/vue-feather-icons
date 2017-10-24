# Vue Feather Icons

[![npm](https://img.shields.io/npm/v/vue-feather-icons-ssr.svg)](https://www.npmjs.com/package/vue-feather-icons-ssr) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Feather icons plugin for Vue.js, SSR supported.

## Demo

[Jsfiddle](https://jsfiddle.net/7vjv08km/1/)

## Installation

```bash
npm install --save vue-feather-icons-ssr
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
//for convenience, import as alias
import {VueFeatherIconsSsr as icon} from 'vue-feather-icons-ssr'
//use the code below to support SSR
//import {VueFeatherIconsSsrJsx as icon} from 'vue-feather-icons-ssr'

//register it globally
Vue.component('icon', icon)
```

```html
<!-- name option index: https://feathericons.com
pass the name of feather icon to display the icon you want -->
<icon name="github"></icon>
<!-- you can also pass any SVG compatible attributes to the component -->
<icon name="github" stoke-width="1"></icon>
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-feather-icons-ssr/dist/vue-feather-icons-ssr.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-feather-icons-ssr"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Thanks to

[Feather Icons](https://feathericons.com)

## License

[MIT](http://opensource.org/licenses/MIT)
