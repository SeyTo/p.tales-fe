<script>
import NavBar from './shared/components/NavBar'
import StudentNavBarButtonbarLanding from './shared/components/navbar-slots/student-navbar-buttonbar-landing.vue'
import TalesNavDrawer from './shared/components/TalesNavDrawer.vue'

export default {
  name: 'App',

  components: {
    'tales-navbar': NavBar,
    'student-navbar-buttonbar-landing': StudentNavBarButtonbarLanding,
    'tales-navdrawer': TalesNavDrawer
  }

}
</script>


<template lang="pug">
  v-app(light)

    // -- global navbar & navdrawer
    tales-navbar
    tales-navdrawer

    // -- content start
    v-content
      router-view/
      // temp content
      v-container(fluid)
        v-layout(column align-center)
          h2 PAGES
          ul 
            li: router-link(:to="{ name: 'StudentProfile' }") Student Profile Page
            li: router-link(:to="{ name: 'StudentPostLoginQuery' }") Student Post Log In Query Page 
      
    // -- footer start
    v-footer(app) 
      span &copy; 2018

</template>

