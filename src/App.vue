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
            li: router-link(:to="{ name: 'StudentProfile' }") Student Profile Page
            li: router-link(:to="{ name: 'StuPostSignupQuery' }") Student Post Log In Query Page 
            li: router-link(:to="{ name: 'EmployerProfile' }") Employer Profile Page
            li: router-link(:to="{ name: 'EmployerLanding' }") Employer Landing Page
            li: router-link(:to="{ name: 'EmployerSearch' }") Employer Search Page
      
    // -- footer start
    v-footer(app) 
      span &copy; 2018

</template>

