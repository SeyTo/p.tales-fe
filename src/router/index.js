import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/views/Landing'
import StudentProfile from '@/views/StudentProfile'
import StuPostsignupQuery from '@/views/stu-postsignup-query'

Vue.use(Router)

export default new Router({
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
      component: StuPostsignupQuery
    }
  ]
})

