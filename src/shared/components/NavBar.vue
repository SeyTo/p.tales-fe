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
        return [ 'fixed', 'float', 'absolute', 'scroll-off' ].index(val) !== -1
      }
    }
  },

  data () {
    return {
      title: 'Tales',
      // clip the drawer above the navbar
      clipped: false,
      // toggle a mini variant of the navbar
      miniVariant: false,
      drawer: {
        disabled: false
      }
    }
  },

  computed: {
    drawerModel: {
      get () {
        return this.$store.getters.getDrawer
      },
      set (val) {
        this.$store.commit('setDrawerOpen', { open: val })
      }
    },
    isSmall () {
      return this.$vuetify.breakpoint.smAndDown
    }
  }

}
</script>


<template lang="pug"> 

div
  // -- master navtoolbar
  v-toolbar(
    app 
    flat
    :clipped-left="clipped"
    )
    // TODO: use svg
    img(src="@/assets/favicon.64.png" alt="Tales logo").logo 
    v-toolbar-title {{ title }}
    v-spacer
    v-toolbar-side-icon(@click.stop="drawerModel = true" v-if="isSmall") 
    // everything from ./navbar-slots/*
    router-view(name="talesNavDrawer" v-if="!isSmall")

</template> 


<style lang="stylus">

.logo
  height 80% 

</style>

