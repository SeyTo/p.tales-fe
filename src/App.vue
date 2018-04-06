<script>
import NavBar from './shared/components/NavBar'
import StudentNavBarButtonbarLanding from './shared/components/navbar-slots/student-navbar-buttonbar-landing.vue'

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      // login dialog options
      enable: true,
      toggle: false
    }
  },

  computed: {
    ifSmallSized () {
      return this.$vuetify.breakpoint.smAndDown
    },
    // test TODO: simplify
    talesDrawer: {
      set (isToOpen) {
        // console.log('set isTOOpen: ' + this.$store.getters.getDrawer)
        this.$store.commit('setDrawerOpen', { open: isToOpen })
      },
      get () {
        // console.log('get isTOOpen: ' + this.$store.getters.getDrawer)
        return this.$store.getters.getDrawer
      }
    }
  },

  methods: {
    getToggle (event) {
      console.log('got event')
      this.toggle = event
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
      student-navbar-buttonbar-landing(v-if="!ifSmallSized")/

    // -- content start
    v-content
      router-view/
      // temp content
      v-container(fluid)
        v-layout(column align-center)
          h2 PAGES
          ul 
            li: a(@click.stop="enable = true") Landing page - login/signup dialog 
      
    // -- footer start
    v-footer(app) 
      span &copy; 2017

    // -- Master Navigation Drawer
    // this is the drawer for all navbars and its contents are controlled 
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
      router-view(name="talesNavDrawer")
</template>

