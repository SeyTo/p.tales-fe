<script>
import BaseNavbar from './base-navbar.vue'

export default {
  name: 'stu-loggedin-navbar',
  data () {
    return {
      'jobsOptions': [
        { text: 'Search', route: 'StudentJobsSearch' },
        { text: 'Your Applications', route: 'StudentJobsApplications' },
        { text: 'Saved Jobs', route: 'StudentJobsBookmarks' },
        { text: 'Invitations', route: 'StudentJobsInvitations' }
      ],
      'profileOptions': [
        { text: 'Profile', route: 'StudentProfile' },
        { text: 'User Preferences', route: 'StudentUserPrefs' },
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
base-navbar(:lockNotif="true" :fluid="false")
  // -- jobs & interns menu
  v-btn(
    flat 
    :to="{ name: 'StudentFeeds' }"
  ).fill-height.ma-0 Feeds

  v-menu(offset-y bottom left).fill-height.ma-0 
    v-btn(slot="activator" flat).fill-height.ma-0 Jobs & Interns
    v-list
      v-list-tile(
          v-for="(item, i) in jobsOptions" 
          :key="i" 
          :to="{ name: item.route }"
          )
          v-list-tile-title {{ item.text }}

  v-btn(flat :to="{ name: 'Explore' }").fill-height.ma-0 Explore Companies

  // -- notification 
  v-btn(slot="notif" flat fab small :to="{ name: 'StudentMessages' }")
    img(src="@/assets/svg/notification.svg").h80

  // -- profile menu
  v-menu(slot="avatar" offset-y bottom left) 
    v-btn(slot="activator" fab small)
      img(src="@/assets/svg/avatar.svg").round
    v-list
      v-list-tile(
        v-for="(item, i) in profileOptions" 
        :key="i" 
        :to="{ name: item.route }") 
        v-list-tile-title {{ item.text }}

</template>


<style lang="stylus" scoped>
.h80
  height 80%
.round
  border-radius 50%
</style>

