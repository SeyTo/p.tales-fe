import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/landing'
import StudentProfile from '@/views/student-profile'
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
      component: StudentProfile 
    },
    {
      path: '/student/postlogin',
      name: 'StuPostSignupQuery',
      components: {
        default: StuPostsignupQuery
      }
    }
  ]
})
