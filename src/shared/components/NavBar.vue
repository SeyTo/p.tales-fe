<script>
export default {
  name: 'tales-navbar',
  data () {
    return {
      title: 'Tales',
      clipped: false,
      miniVariant: false,
      drawer: false,
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
  }
}
</script>

<template lang="pug"> 
v-toolbar(app :clipped-left="clipped")
  v-toolbar-side-icon(@click.stop="drawer = !drawer" v-if="toolbarSideIconBind") 
  v-toolbar-title(v-text="title") 
  v-spacer
  slot
</template> 

<style lang="stylus">
</style>

