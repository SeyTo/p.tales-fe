import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import LandingButtonBar from '@/shared/components/LandingButtonBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',

      components: {
        default: Landing,
        talesNavDrawer: LandingButtonBar
      }

    }
  ]
})
