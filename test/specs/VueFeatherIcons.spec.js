import VueFeatherIcons from 'src/VueFeatherIcons.vue'
import { createVM } from '../helpers/utils.js'

describe('VueFeatherIcons.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<VueFeatherIcons name="circle"></VueFeatherIcons>
`, { components: { VueFeatherIcons }})
    /*global SVGElement*/
    vm.$el.querySelector('.feather').should.instanceof(SVGElement)
  })
})
