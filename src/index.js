import VueFeatherIconsSsr from './VueFeatherIconsSsr.vue'
import VueFeatherIconsSsrJsx from './VueFeatherIconsSsr.jsx'

function plugin (Vue) {
  Vue.component('VueFeatherIconsSsr', VueFeatherIconsSsr)
  Vue.component('VueFeatherIconsSsrJsx', VueFeatherIconsSsrJsx)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  VueFeatherIconsSsr,
  VueFeatherIconsSsrJsx,
  version
}
