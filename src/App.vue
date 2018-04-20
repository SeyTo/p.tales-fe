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
            li: router-link(:to="{ name: 'EmployerAnalytics' }") Analytics
            li: router-link(:to="{ name: 'EmployerCreateNew' }") Create New
            li: router-link(:to="{ name: 'EmployerListingsApplications' }") Listings Applications
            li: router-link(:to="{ name: 'EmployerListingsBookmarks' }") Listings Bookmarks
            li: router-link(:to="{ name: 'EmployerMessages' }") Messages
            li: router-link(:to="{ name: 'EmployerPrefs' }") Prefs

            li: h3 Student Pages
            li: router-link(:to="{ name: 'StuPostSignupQuery' }") Post Sign Up Query Page 
            li: router-link(:to="{ name: 'StudentProfile' }") Profile
            li: router-link(:to="{ name: 'StudentJobsSearch' }") Job Search
            li: router-link(:to="{ name: 'StudentJobsApplications' }") Applications
            li: router-link(:to="{ name: 'StudentJobsBookmarks' }") Job > Bookmarks 
            li: router-link(:to="{ name: 'StudentUserPrefs' }") Prefs 
            li: router-link(:to="{ name: 'StudentMessages' }") Student Messages

            li: h3 Misc
            li: router-link(:to="{ name: 'CompanyDirectory' }") Company Directory
      
    // -- footer start
    v-footer(app) 
      span &copy; 2018

</template>
