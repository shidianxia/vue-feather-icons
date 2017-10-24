import feather from 'feather-icons'
export default {
  name: 'VueFeatherIconsSsrJsx',
  render (h) {
    return h('svg',
      {
        attrs: { xmlns: 'http://www.w3.org/2000/svg', width: this.size, height: this.size, viewBox: `0 0 ${this.size} ${this.size}`, fill: 'none', stroke: 'currentColor', 'stroke-width': this.strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', class: `feather feather-${this.name}` },
        domProps: {
          innerHTML: feather.icons[this.name]
        }
      }
    )
  },
  props: { name: String, size: { type: String, default: '24' }, strokeWidth: { type: String, default: '2' }}
}
