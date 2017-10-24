import VueFeatherIconsJsx from 'src/VueFeatherIcons.jsx'
import { createVM } from '../helpers/utils.js'

describe('VueFeatherIcons.jsx', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<VueFeatherIconsJsx name="anchor"></VueFeatherIconsJsx>
`, { components: { VueFeatherIconsJsx }})
    /*global SVGElement*/
    vm.$el.querySelector('.feather').should.instanceof(SVGElement)
  })

  it('renders JSX too', function () {
    // You can write your tests in JSX but make sure to use the lower case
    // version of your component because otherw
    const vm = createVM(this, h => (
      <vue-feather-icons-jsx name='anchor'></vue-feather-icons-jsx>
    ), { components: { VueFeatherIconsJsx }})
    vm.$nextTick(() => {
      vm.$el.querySelector('.feather').should.instanceof(SVGElement)
    })
  })
})
