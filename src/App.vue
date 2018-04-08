<script>
import NavBar from './shared/components/NavBar'
import StudentNavBarButtonbarLanding from './shared/components/navbar-slots/student-navbar-buttonbar-landing.vue'

/**
 * Start Here.
 */
export default {
  name: 'App',
  data () {
    return {
      toggle: false
    }
  },

  computed: {
    ifSmallSized () {
      return this.$vuetify.breakpoint.smAndDown
    },
    // see @/stores/modules/TalesNavbarStore.js@setDrawerOpen
    talesDrawer: {
      set (shouldOpen) {
        this.$store.commit('setDrawerOpen', { open: shouldOpen })
      },
      get () {
        return this.$store.getters.getDrawer
      }
    }
  },

  components: {
    'tales-navbar': NavBar,
    'student-navbar-buttonbar-landing': StudentNavBarButtonbarLanding
  }

}
</script>


<template lang="pug">
  v-app(light)

    // -- navbar
    tales-navbar
      // TODO: control navbar toggler directly using store 
      student-navbar-buttonbar-landing(v-if="!ifSmallSized")/

    // -- content start
    v-content
      router-view/
      // temp content
      v-container(fluid)
        v-layout(column align-center)
          h2 PAGES (navigate to inner links through here)
          ul 
            li: router-link(:to="{ name: 'StudentProfile' }") Student Profile Page
            li: router-link(:to="{ name: 'StudentPostLoginQuery' }") Student Post Log In Query Page 
      
    // -- footer start
    v-footer(app) 
      span &copy; 2017

    // -- master Navigation Drawer
    // main drawer for all navbars and its contents are controlled 
    // using vuex 'tales-navbar'
    v-navigation-drawer( 
        :mini-variant="false"
        :clipped="false"
        v-model="talesDrawer"
        disable-resize-watcher
        persistent
        fixed
        app
      )
      // all views are directed using a router, so when changing link, change router component for this router-view as well or disable it.
      router-view(name="talesNavDrawer")

</template>

