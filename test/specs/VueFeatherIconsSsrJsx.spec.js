import VueFeatherIconsSsrJsx from 'src/VueFeatherIconsSsr.jsx'
import { createVM } from '../helpers/utils.js'

describe('VueFeatherIconsSsr.jsx', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<VueFeatherIconsSsrJsx name="anchor"></VueFeatherIconsSsrJsx>
`, { components: { VueFeatherIconsSsrJsx }})
    /*global SVGElement*/
    vm.$el.querySelector('.feather').should.instanceof(SVGElement)
  })

  it('renders JSX too', function () {
    // You can write your tests in JSX but make sure to use the lower case
    // version of your component because otherw
    const vm = createVM(this, h => (
      <vue-feather-icons-ssr-jsx name='anchor'></vue-feather-icons-ssr-jsx>
    ), { components: { VueFeatherIconsSsrJsx }})
    vm.$nextTick(() => {
      vm.$el.querySelector('.feather').should.instanceof(SVGElement)
    })
  })
})
