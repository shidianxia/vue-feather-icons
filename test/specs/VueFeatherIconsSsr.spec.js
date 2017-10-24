import VueFeatherIconsSsr from 'src/VueFeatherIconsSsr.vue'
import { createVM } from '../helpers/utils.js'

describe('VueFeatherIconsSsr.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<VueFeatherIconsSsr name="circle"></VueFeatherIconsSsr>
`, { components: { VueFeatherIconsSsr }})
    /*global SVGElement*/
    vm.$el.querySelector('.feather').should.instanceof(SVGElement)
  })
})
