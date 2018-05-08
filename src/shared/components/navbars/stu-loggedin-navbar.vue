<script>
import TalesNavbar from '../tales-navbar.vue'

export default {
  name: 'stu-loggedin-navbar',
  data () {
    return {
      'jobsOptions': [
        { text: 'Search', route: 'StudentJobsSearch' },
        { text: 'Your Applications', route: 'StudentJobsApplications' },
        { text: 'Saved Jobs', route: 'StudentJobsBookmarks' },
        { text: 'Invitations', route: '' }
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
    'tales-navbar': TalesNavbar
  }
}
</script>


<template lang="pug">
tales-navbar(:lockNotif="true")
  // -- jobs & interns menu
  v-menu(
      bottom 
      left
    ) 
    v-btn(slot="activator" flat) Jobs & Interns
    v-list
      v-list-tile(
          v-for="(item, i) in jobsOptions" 
          :key="i" 
          :to="{ name: item.route }"
          ) 
          v-list-tile-title {{ item.text }}

  v-btn(flat) Blogs

  // -- notification 
  v-btn(slot="notif" flat fab small)
    img(src="@/assets/svg/notification.svg").h80

  // -- profile menu
  v-menu(slot="avatar" bottom left) 
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
  height 70%
.round
  border-radius 50%
</style>
