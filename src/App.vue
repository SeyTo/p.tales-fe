<script>
import TalesNavBar from './shared/components/tales-navbar'
import TalesNavDrawer from './shared/components/tales-navdrawer'

export default {
  name: 'App',

  components: {
    'tales-navbar': TalesNavBar,
    'tales-navdrawer': TalesNavDrawer
  }

}
</script>


<template lang="pug">
  v-app(light)

    // -- content start
    v-content
      router-view/
      // temp content
      v-container(fluid)
        v-layout(column align-center)
          h2 PAGES
          ul 
            li: h3 Employer Pages
            li: router-link(:to="{ name: 'EmployerPostSignupQuery' }") Employer Post Signup Query Page
            li: router-link(:to="{ name: 'EmployerLanding' }") Employer Landing Page
            li: router-link(:to="{ name: 'EmployerProfile' }") Employer Profile Page
            li: router-link(:to="{ name: 'EmployerSearch' }") Employer Search Page

            li: h3 Student Pages
            li: router-link(:to="{ name: 'StuPostSignupQuery' }") Student Post Log In Query Page 
            li: router-link(:to="{ name: 'StudentProfile' }") Student Profile Page
            li: router-link(:to="{ name: 'StudentJobsSearch' }") Student Job Search Page
            li: router-link(:to="{ name: 'StudentJobsApplications' }") Student Job Applications
            li: router-link(:to="{ name: 'StudentJobsBookmarks' }") Student Job Bookmarks 
            li: router-link(:to="{ name: 'StudentUserPrefs' }") Student User Prefs 
      
    // -- footer start
    v-footer(app) 
      span &copy; 2018

</template>
