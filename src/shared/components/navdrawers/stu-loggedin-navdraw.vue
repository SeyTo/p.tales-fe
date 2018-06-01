<script>
import BaseNavdrawer from './base-navdrawer'

export default {
  name: '',
  data () {
    return {
      // TODO use global instance of these options
      'jobsOptions': [
        { text: 'Search', route: 'StudentJobsSearch' },
        { text: 'Your Applications', route: 'StudentJobsApplications' },
        { text: 'Bookmarked Jobs', route: 'StudentJobsBookmarks' },
        { text: 'Invitations', route: 'StudentJobsInvitations' }
      ],
      'profileOptions': [
        { text: 'Profile', route: 'StudentProfile'},
        { text: 'User Preferences', route: 'StudentUserPrefs' },
        { text: 'Terms & Conditions', route: '' },
        { text: 'Log Out', route: '' }
      ]
    }
  },

  methods: {
    navigate (route) {
      this.$router.push({ name: route })
    }
  },

  components: {
    'base-navdrawer': BaseNavdrawer
  }
}
</script>


<template lang="pug">
base-navdrawer
  v-list
    v-list-group
      v-list-tile(slot="activator")
        v-list-tile-content
          v-list-tile-title Jobs & Interns
      v-list-tile(v-for="(item, i) in jobsOptions" :key="item.text" @click="navigate(item.route)")
        v-list-tile-content.pl-3
          | {{ item.text }}
    v-list-tile(@click="navigate('')")
      v-list-tile-title Blogs
    v-list-tile(@click="navigate('')")
      v-list-tile-title Explore Companies
    v-list-group
      v-list-tile(slot="activator")
        v-list-tile-content
          v-list-tile-title Profile
      v-list-tile(v-for="(item, i) in profileOptions" :key="item.text" @click="navigate(item.route)")
        v-list-tile-content.pl-3
          | {{ item.text }}
</template>


<style lang="stylus" scoped>
.navigation-drawer
  display flex
  flex-direction column  
</style>
