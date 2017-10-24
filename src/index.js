import VueFeatherIcons from './VueFeatherIcons.vue'
import VueFeatherIconsJsx from './VueFeatherIcons.jsx'

function plugin (Vue) {
  Vue.component('VueFeatherIcons', VueFeatherIcons)
  Vue.component('VueFeatherIconsJsx', VueFeatherIconsJsx)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  VueFeatherIcons,
  VueFeatherIconsJsx,
  version
}
