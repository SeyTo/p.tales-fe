<script>
/**
 * Component: The master Navbar for entire website. This component
 * should be controlled from a store.
 */
export default {
  // TODO: set sticky attribute
  // TODO: set visible attribute
  // TODO implement container sizing
  name: 'tales-navbar',

  props: {
    type: {
      validator (val) {
        return [ 'fixed', 'float', 'absolute', 'scroll-off' ].index(val) !== -1
      }
    },
    /** Shows or hide the slot on the right side. */
    noSlot: {
      default: false
    },
    /** Sets the navbar in container size */
    containerSize: {
      default: false
    },
    /** Notification slot does not hide even on small size */
    lockNotif: {
      default: false
    },
    /** Avatar slot does not hide even on small size */
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
      return ((this.lockNotif && !this.noSlot) || (!this.isSmall && !this.noSlot))
    },
    showAvatar () {
      return ((this.lockAvatar && !this.noSlot) || (!this.isSmall && !this.noSlot))
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
      // TODO: use svg
      img(src="@/assets/svg/favicon.svg" alt="Tales logo").logo 
      v-toolbar-title {{ title }}

      v-spacer

      slot(v-if="!isSmall && !noSlot")
      slot(name="notif" v-if="showNotif")
      slot(name="avatar" v-if="showAvatar")

      v-toolbar-side-icon(@click.stop="drawerModel = true" v-if="isSmall && !noSlot") 

</template> 


<style lang="stylus" scoped>
.logo
  height 80% 
</style>

