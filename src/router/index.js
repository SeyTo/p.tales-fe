import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/landing'

// employer pages
import EmpAnalytics from '@/views/emp/emp-analytics'
import EmpCreateNew from '@/views/emp/emp-create-new'
import EmpLanding from '@/views/emp/emp-landing'
import EmpListingsApplications from '@/views/emp/listings/emp-listings-applications'
import EmpListingsBookmarks from '@/views/emp/listings/emp-listings-bookmarks'
import EmpMessages from '@/views/emp/emp-messages'
import EmpPostsignupquery from '@/views/emp/emp-postsignupquery'
import EmpPrefs from '@/views/emp/emp-prefs'
import EmpProfile from '@/views/emp/emp-profile'
import EmpRoot from '@/views/emp/emp-root'
import EmpSearch from '@/views/emp/emp-search'

// student pages
import StuJobsApplications from '@/views/stu/stu-jobs-applications'
import StuJobsBookmarks from '@/views/stu/stu-jobs-bookmarks'
import StuJobsSearch from '@/views/stu/stu-jobs-search'
import StuMessages from '@/views/stu/stu-messages'
import StuPostsignupQuery from '@/views/stu/stu-postsignup-query'
import StuPrefs from '@/views/stu/stu-prefs'
import StuProfile from '@/views/stu/stu-profile'
import StuRoot from '@/views/stu/stu-root'

// blogs
import BlogsLanding from '@/views/blogs/blog-landing'

import CompanyDirectory from '@/views/company-directory'

Vue.use(Router)

export default new Router({
  // using history stack will cause slots to reuse components, which may cause
  // errors with slotted components, specially the navbars and navdrawers
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/emp/postsignup',
      name: 'EmployerPostSignupQuery',
      component: EmpPostsignupquery
    },
    {
      path: '/companydirectory',
      name: 'CompanyDirectory',
      component: CompanyDirectory
    },
    {
      path: '/emp',
      component: EmpRoot,
      children: [
        {
          path: '',
          name: 'EmployerLanding',
          component: EmpLanding
        },
        {
          path: 'profile',
          name: 'EmployerProfile',
          component: EmpProfile
        },
        {
          path: 'search',
          name: 'EmployerSearch',
          component: EmpSearch
        },
        {
          path: 'analytics',
          name: 'EmployerAnalytics',
          component: EmpAnalytics
        },
        {
          path: 'newpost',
          name: 'EmployerCreateNew',
          component: EmpCreateNew
        },
        {
          path: 'messages',
          name: 'EmployerMessages',
          component: EmpMessages
        },
        {
          path: 'prefs',
          name: 'EmployerPrefs',
          component: EmpPrefs
        },
        {
          path: 'listings',
          redirect: { name: 'EmpListingsApplications' }
        },
        {
          path: 'listings/applications',
          name: 'EmployerListingsApplications',
          component: EmpListingsApplications
        },
        {
          path: 'listings/bookmarks',
          name: 'EmployerListingsBookmarks',
          component: EmpListingsBookmarks
        }
      ]
    },
    {
      path: '/stu/postsignup',
      name: 'StuPostSignupQuery',
      component: StuPostsignupQuery
    },
    {
      path: '/stu',
      component: StuRoot,
      children: [
        {
          path: '',
          redirect: { name: 'StudentJobSearch' }
        },
        {
          path: 'profile',
          name: 'StudentProfile',
          component: StuProfile
        },
        {
          path: 'jobs/search',
          name: 'StudentJobsSearch',
          component: StuJobsSearch
        },
        {
          path: 'jobs/applications',
          name: 'StudentJobsApplications',
          component: StuJobsApplications
        },
        {
          path: 'jobs/bookmarks',
          name: 'StudentJobsBookmarks',
          component: StuJobsBookmarks
        },
        {
          path: 'prefs',
          name: 'StudentUserPrefs',
          component: StuPrefs
        },
        {
          path: 'messages',
          name: 'StudentMessages',
          component: StuMessages
        }
      ]
    },
    {
      path: '/blogs',
      name: 'BlogsLanding',
      component: BlogsLanding
    }
  ]
})
