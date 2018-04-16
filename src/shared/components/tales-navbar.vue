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
    },
    noSlot: {
      default: false
    },
    containerSize: {
      default: false
    },
    lockNotif: {
      default: false
    },
    lockAvatar: {
      default: false
    }
  },

  data () {
    return {
      title: 'Tales',
      // clip the drawer above the navbar
      clipped: false
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
    },
    showNotif () {
      return (this.lockNotif || (!this.isSmall && !this.noSlot))
    },
    showAvatar () {
      return (this.lockAvatar || (!this.isSmall && !this.noSlot))
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
    color="white"
    :clipped-left="clipped"
    )
      // TODO: use container to get container size for toolbar content
      // TODO: use svg
      img(src="@/assets/favicon.64.png" alt="Tales logo").logo 
      v-toolbar-title {{ title }}
      v-spacer
      // everything from ./navbar-slots/*
      slot(v-if="!isSmall && !noSlot")
      slot(name="notif" v-if="showNotif")
      slot(name="avatar" v-if="showAvatar")
      v-toolbar-side-icon(@click.stop="drawerModel = true" v-if="isSmall && !noSlot") 

</template> 


<style lang="stylus">

.logo
  height 80% 

</style>

