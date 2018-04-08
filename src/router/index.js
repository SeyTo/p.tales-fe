import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import StudentNavbarButtonbarLanding from '../shared/components/navbar-slots/student-navbar-buttonbar-landing.vue'
import StudentProfile from '@/views/StudentProfile'
import StudentPostLoginQuery from '@/views/StudentPostLoginQuery'

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
    },
    {
      path: '/student/postlogin',
      name: 'StudentPostLoginQuery',
      component: StudentPostLoginQuery
    }
  ]
})

// TODO: for StudentPostLoginQuery, do argument to disable navDrawer and empty Navbar <08-04-18, rj> //
