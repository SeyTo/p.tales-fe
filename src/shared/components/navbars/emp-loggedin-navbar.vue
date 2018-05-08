<script>
import TalesNavbar from '../tales-navbar.vue'

export default {
  name: 'emp-loggedin-navbar',

  data () {
    return {
      // TODO use universal import
      'profileOptions': [
        { text: 'Profile', route: ''},
        { text: 'User Preferences', route: '' },
        { text: 'Terms & Conditions', route: '' },
        { text: 'Log Out', route: '' }
      ]
    }
  },

  components: {
    'tales-navbar': TalesNavbar
  }
}
</script>


<template lang="pug">
tales-navbar(:lockNotif="true")
  div 
    v-btn(flat) Post a Job
    v-btn(flat) Search
    v-btn(flat) Listings
  v-btn(fab icon flat small slot="notif") 
    img(src="@/assets/svg/notification.svg").h70
  v-menu(slot="avatar" bottom left) 
    v-btn(slot="activator" fab small)
      img(src="@/assets/svg/github-logo.svg").round
    v-list
      v-list-tile(v-for="(item, i) in profileOptions" :key="i" @click="") 
        v-list-tile-title {{ item.text }}

</template>


<style lang="stylus" scoped>
.h70
  height 70%
.round
  border-radius 50%
</style>
