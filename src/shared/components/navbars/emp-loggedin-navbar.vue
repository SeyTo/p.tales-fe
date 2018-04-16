<script>
import TalesNavbar from '../tales-navbar.vue'

export default {
  name: 'emp-loggedin-navbar',

  data () {
    return {
      // TODO use universal import
      'profileOptions': [
        { text: 'Profile' },
        { text: 'User Preferences' },
        { text: 'Terms & Conditions' },
        { text: 'Log Out' }
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
  template
    v-btn(flat) Post a Job
    v-btn(flat) Search
    v-btn(flat) Listings
  template(slot="notif")
    v-btn(fab icon flat small) 
      img(src="@/assets/svg/notification.svg")
  template(slot="avatar")
    v-menu(bottom left) 
      v-btn(slot="activator" fab small)
        img(src="@/assets/svg/avatar.svg").round
      v-list
        v-list-tile(v-for="(item, i) in profileOptions" :key="i" @click="") 
          v-list-tile-title {{ item.text }}
</template>


<style lang="stylus" scoped>
</style>
