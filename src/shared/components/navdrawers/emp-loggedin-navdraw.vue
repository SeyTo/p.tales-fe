<script>
import BaseNavdrawer from './base-navdrawer'

export default {
  name: 'emp-navbar-navdraw',

  data () {
    return {
      'profileOptions': [
        { text: 'Profile' },
        { text: 'User Preferences' },
        { text: 'Terms & Conditions' },
        { text: 'Log Out' }
      ]
    }
  },

  components: {
    'base-navdrawer': BaseNavdrawer
  }

}
</script>


<template lang="pug">
base-navdrawer
  v-btn(flat) Post a Job
  v-btn(flat) Search
  v-btn(flat) Listings
  v-expansion-panel(inset)
    v-expansion-panel-content
      div(slot="header") Profile
      div(v-for="(item, i) in profileOptions" :key="i")
        v-btn(flat) {{ item.text }}

</template>


<style lang="stylus" scoped>
.navigation-drawer
  display flex
  flex-direction column
</style>
