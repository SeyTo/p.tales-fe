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
  },

  methods: {
    openDrawer () {
      this.$store.commit('setDrawerOpen', { open: true })
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
    // should contain various navbar's inner contents, likely buttons
    slot

</template> 

<style lang="stylus">
.logo
  width 50px
</style>

