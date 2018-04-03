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

    v-toolbar( 
      app
      :clipped-left="clipped"
    )
      v-toolbar-side-icon(@click.stop="drawer = !drawer" v-if="toolbarSideIconBind") 
      v-toolbar-title(v-text="title") 
      v-spacer
      div(v-if="!toolbarSideIconBind")
        LoginDialog/

    // -- LOGIN DIALOG --
    // content start
    v-content
      v-layout(row justify-center)
        // LoginDialog(v-bind:enable="enable")/ 
      router-view/
      v-container(fluid)
        v-layout(column align-center)
          h2 PAGES
          ul 
            li: a(@click.stop="enable = true") Landing page - login/signup dialog 
      
    // footer start
    v-footer(:fixed="fixed" app) 
      span &copy; 2017
</template>

<style lang="stylus">
.lotta-height
  height 100%
</style>

<script>
import LoginDialog from './shared/components/LoginDialog'

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
      fixed: true,
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
    LoginDialog
  }
}
</script>
