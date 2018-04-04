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
    v-navigation-drawer( 
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      disable-resize-watcher
      persistent
      fixed
      app
    )
      v-list
        v-list-tile( 
          value="true"
          v-for="(item, i) in items"
          :key="i"
        )
          v-list-tile-action
            v-icon(v-html="item.icon") 
          v-list-tile-content
            v-list-tile-title(v-text="item.title") 

    // -- navbar
    tales-navbar
      landing-button-bar/

    // -- content start
    v-content
      // temp content
      router-view/
      v-container(fluid)
        v-layout(column align-center)
          h2 PAGES
          ul 
            li: a(@click.stop="enable = true") Landing page - login/signup dialog 
      
    // footer start
    v-footer(app) 
      span &copy; 2017
</template>

<style lang="stylus">
</style>


