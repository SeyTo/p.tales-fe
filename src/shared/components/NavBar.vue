<script>
export default {
  name: 'tales-navbar',
  data () {
    return {
      title: 'Tales',
      // clip the drawer above the navbar
      clipped: false,
      // toggle a mini variant of the navbar
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
    }
    // test
    // next () {
    //   const active = parseInt(this.enable)
    //   this.enable = (active < 2 ? active + 1 : 0).toString()
    // }
  },
  methods: {
    openDrawer () {
      this.$store.commit('setDrawerOpen', { open: true })
      console.log(this.$store.getters.getDrawer)
    }
  }
}
</script>

<template lang="pug"> 
div
  v-toolbar(app :clipped-left="clipped")
    v-toolbar-side-icon(@click.stop="openDrawer" v-if="toolbarSideIconBind") 
    img(src="@/assets/favicon.64.png" alt="Tales logo" class="logo") 
    v-toolbar-title {{ title }}
    v-spacer
    slot

</template> 

<style lang="stylus">
.logo
  width 50px
</style>

