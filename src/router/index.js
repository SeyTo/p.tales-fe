import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/landing'
import EmpLanding from '@/views/emp-landing'
import StuProfile from '@/views/stu-profile'
import EmpProfile from '@/views/emp-profile'
import StuPostsignupQuery from '@/views/stu-postsignup-query'

Vue.use(Router)

export default new Router({
  // using history stack will cause slots to reuse components, which may cause
  // errors with slotted components, specially the navbars and navdrawers
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      components: {
        default: Landing
      }
    },
    {
      path: '/student/profile',
      name: 'StudentProfile',
      component: StuProfile
    },
    {
      path: '/student/postlogin',
      name: 'StuPostSignupQuery',
      components: {
        default: StuPostsignupQuery
      }
    },
    {
      path: '/employer/profile',
      name: 'EmployerProfile',
      component: EmpProfile
    },
    {
      path: '/employer/',
      name: 'EmployerLanding',
      component: EmpLanding

    }
  ]
})
