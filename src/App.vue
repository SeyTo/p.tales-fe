<script>
import NavBar from './shared/components/NavBar'
import LandingButtonBar from './shared/components/LandingButtonBar'

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      // login dialog options
      enable: true
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
  components: {
    'tales-navbar': NavBar,
    'landing-button-bar': LandingButtonBar
  }
}
</script>
<template lang="pug">
  v-app(light)

    // -- navbar
    tales-navbar
      landing-button-bar(v-if="!ifSmallSized")/

    // -- content start
    v-content
      // temp content
      router-view/
      v-container(fluid)
        v-layout(column align-center)
          h2 PAGES
          ul 
            li: a(@click.stop="enable = true") Landing page - login/signup dialog 
      
    // -- footer start
    v-footer(app) 
      span &copy; 2017

    // -- Master Navigation Drawer
    // this drawer and its contents are controlled using vuex 'tales-navbar'
    v-navigation-drawer( 
        :mini-variant="false"
        :clipped="false"
        v-model="talesDrawer"
        disable-resize-watcher
        persistent
        fixed
        app
      )
      v-list(class="pa-0") 
        v-list-tile
          v-list-tile-content
            v-list-tile-title John Leider
</template>

<style lang="stylus">
</style>

