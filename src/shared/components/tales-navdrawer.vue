<script>
import StuNavbarLanding from './navbar-slots/stu-navbar-landing'

/**
 * The Global Navdrawer.
 */
export default {
  name: 'tales-navdrawer',

  data () {
    return {
      // current dynamic component for this drawer
      drawerComponent: StuNavbarLanding,
      miniVariant: false
    }
  },

  computed: {
    drawerModel: {
      get () {
        return this.$store.getters.isDrawerOpen
      },
      set (val) {
        this.$store.commit('setDrawerOpen', { open: val })
      }
    },
    enable () {
      return this.$store.getters.isDrawerEnabled
    }
  },

  components: {
    'stu-navbar-btnbar-landing': StuNavbarLanding
  }
}
</script>


<template lang="pug">

v-navigation-drawer(
  :mini-variant="miniVariant"
  :clipped="false"
  v-model="drawerModel"
  disable-resize-watcher
  persistent
  fixed
  app
  v-show="enable"
)
  components(:is="drawerComponent" compactView="true")
</template>


<style lang="stylus">
</style>

