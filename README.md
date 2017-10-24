# Vue Feather Icons

[![npm](https://img.shields.io/npm/v/vue-feather-icons.svg)](https://www.npmjs.com/package/vue-feather-icons) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Feather icons plugin for Vue.js

## Installation

```bash
npm install --save vue-feather-icons
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueFeatherIcons from 'vue-feather-icons'

Vue.use(VueFeatherIcons)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-feather-icons/dist/vue-feather-icons.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-feather-icons"></script>
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


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
