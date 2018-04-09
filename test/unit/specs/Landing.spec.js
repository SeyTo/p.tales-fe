import Vue from 'vue'
import Vuetify from 'vuetify'
import Landing from '@/views/Landing.vue'
import NavBar from '@/shared/components/NavBar'

// global.Vuetify = require('vuetify')
Vue.use(Vuetify)

describe('Landing.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Landing)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
    .to.equal('Tales')
  })
})

describe('Navbar.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NavBar)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
    .to.equal('Testing')
  })
})

// TODO: NavBar slot load
// TODO: NavBar fixed, sticky behaviour
// TODO: StudentAuthTab
