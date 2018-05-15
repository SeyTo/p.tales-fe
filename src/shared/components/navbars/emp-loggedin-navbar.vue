<script>
import BaseNavbar from './base-navbar.vue'

export default {
  name: 'emp-loggedin-navbar',

  data () {
    return {
      // TODO use universal import
      'profileOptions': [
        { text: 'Profile', route: 'EmployerProfile' },
        { text: 'User Preferences', route: 'EmployerPrefs' },
        { text: 'Terms & Conditions', route: '' },
        { text: 'Log Out', route: '' }
      ]
    }
  },

  components: {
    'base-navbar': BaseNavbar
  }
}
</script>


<template lang="pug">
base-navbar(:lockNotif="true")
  v-btn(flat :to="{ name: 'EmployerCreateNew' }").fill-height.ma-0 Post a Job
  v-btn(flat :to="{ name: 'EmployerSearch' }").fill-height.ma-0 Search
  v-btn(flat :to="{ name: 'EmployerListingsApplications' }").fill-height.ma-0 Listings
  v-btn(fab icon flat small slot="notif" :to="{ name: 'EmployerMessages' }")
    img(src="@/assets/svg/notification.svg").h70
  v-menu(slot="avatar" bottom left)
    v-btn(slot="activator" fab small)
      img(src="@/assets/svg/github-logo.svg").round
    v-list
      template(v-for="(item, i) in profileOptions")
        v-list-tile(:to="{ name: item.route }") 
          v-list-tile-title {{ item.text }}

</template>


<style lang="stylus" scoped>
.h70
  height 70%
.round
  border-radius 50%
</style>
