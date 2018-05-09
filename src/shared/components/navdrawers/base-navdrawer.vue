<script>

/**
 * The Global Navdrawer.
 */
export default {
  name: 'base-navdrawer',

  data () {
    return {
      // current dynamic component for this drawer
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
  slot
  // router-view(name="navDrawer" compactView="true")
  // components(:is="drawerComponent" compactView="true")
</template>


<style lang="stylus" scoped>
</style>

