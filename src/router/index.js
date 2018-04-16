import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/landing'
import EmpLanding from '@/views/emp-landing'
import StuProfile from '@/views/stu-profile'
import EmpProfile from '@/views/emp-profile'
import StuPostsignupQuery from '@/views/stu-postsignup-query'
import EmpSearch from '@/views/emp-search'
import StuJobsearch from '@/views/stu-jobsearch'

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
      path: '/employer/',
      name: 'EmployerLanding',
      component: EmpLanding
    },
    {
      path: '/employer/profile',
      name: 'EmployerProfile',
      component: EmpProfile
    },
    {
      path: '/employer/search',
      name: 'EmployerSearch',
      component: EmpSearch
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
      path: '/student/search',
      name: 'StudentJobSearch',
      component: StuJobsearch
    }
  ]
})
