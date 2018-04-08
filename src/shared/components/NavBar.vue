<script>
/**
 * Component: The master Navbar for entire website. This component
 * should be controlled from a store.
 */
export default {
  // TODO: set sticky attribute
  // TODO: set visible attribute
  name: 'tales-navbar',

  props: {
    type: {
      validator (val) {
        return ['fixed', 'float', 'absolute', 'scroll-off' ].index(val) != -1
      }
    }
  },

  data () {
    return {
      title: 'Tales',
      // clip the drawer above the navbar
      clipped: false,
      // toggle a mini variant of the navbar
      miniVariant: false
    }
  },

  computed: {
    // TODO: toolbar's side icon should be bound with TalesNavbarStore's Dashboard
    toolbarSideIconBind () {
      return (this.$vuetify.breakpoint.smAndDown)
    }
  },

  methods: {
    // TODO: move to TalesNavbarStore
    openDrawer () {
      this.$store.commit('setDrawerOpen', { open: true })
    }
  }

}
</script>


<template lang="pug"> 

div
  // -- master navtoolbar
  v-toolbar(app :clipped-left="clipped")
    v-toolbar-side-icon(@click.stop="openDrawer" v-if="toolbarSideIconBind") 
    // TODO: use svg
    img(src="@/assets/favicon.64.png" alt="Tales logo").logo 
    v-toolbar-title {{ title }}
    v-spacer
    // likely buttons (e.g ./navbar-slots/*)
    slot

</template> 

<style lang="stylus">
.logo
  height 80% 
</style>

