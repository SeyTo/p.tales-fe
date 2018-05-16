// TODO container view
// TODO: set sticky attribute
// TODO: set visible attribute
// TODO implement container sizing
<script>

/**
 * Component: The master Navbar for entire website. This component
 * should be controlled from a store.
 */
export default {
  name: 'base-navbar',

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
    // TODO:  <16-05-18, yourname> remove this //
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
    },
    fluid: {
      default: true
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
    :clipped-left="false"
    flat
    color="white"
  )
    v-container(:fluid="fluid").pa-0.fill-height
      v-layout(align-center).fill-height.px-3
        // v-toolbar-title
        img(src="@/assets/svg/favicon.svg" alt="Tales logo").h80

        v-spacer

        // placing slot inside div forces slots to render in correct order (maybe, idk really)
        div.fill-height
          slot(v-if="!isSmall && !noSlot")
        div
          slot(name="notif" v-if="showNotif")
        div
          slot(name="avatar" v-if="showAvatar")
        v-toolbar-side-icon(@click.stop="drawerModel = true" v-if="isSmall && !noSlot")
          img(src="@/assets/svg/drawerlogo.svg").h80

</template>


<style lang="stylus" scoped>
.h80
  height 80%
</style>

