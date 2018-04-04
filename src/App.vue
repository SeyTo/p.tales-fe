<script>
import NavBar from './shared/components/NavBar'
import LandingButtonBar from './shared/components/LandingButtonBar'

export default {
  name: 'App',
  data () {
    return {
      title: 'Tales',
      toolbarSideIcon: false,
      // drawer options
      // clip the drawer above the navbar
      clipped: false,
      // toggle a mini variant of the navbar
      miniVariant: false,
      // toggle the drawer
      drawer: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      right: true,
      rightDrawer: false,
      // login dialog options
      enable: true
    }
  },
  computed: {
    toolbarSideIconBind () {
      const isSmall = (this.$vuetify.breakpoint.smAndDown)
      if (!isSmall) this.drawer = false
      if (isSmall) console.log('is Small')
      return isSmall
    },
    next () {
      const active = parseInt(this.enable)
      this.enable = (active < 2 ? active + 1 : 0).toString()
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
      landing-button-bar(v-if="!toolbarSideIconBind")/

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

    v-navigation-drawer( 
        :mini-variant="false"
        :clipped="false"
        @input="closed($event)"
        v-model="drawer"
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


