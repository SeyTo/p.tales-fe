import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import StudentNavbarButtonbarLanding from '../shared/components/navbar-slots/student-navbar-buttonbar-landing.vue'
import StudentProfile from '@/views/StudentProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      components: {
        default: Landing,
        talesNavDrawer: StudentNavbarButtonbarLanding
      }
    },
    {
      path: '/student/profile',
      name: 'StudentProfile',
      component: StudentProfile
    }
  ]
})
