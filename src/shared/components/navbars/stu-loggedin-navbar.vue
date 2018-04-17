<script>
import TalesNavbar from '../tales-navbar.vue'

export default {
  name: 'stu-loggedin-navbar',
  data () {
    return {
      'jobsOptions': [
        { text: 'Search' },
        { text: 'Your Applications' },
        { text: 'Saved Jobs' },
        { text: 'Invitations' }
      ],
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
          @click=""
          ) 
          v-list-tile-title {{ item.text }}

  v-btn(flat) Blogs

  // -- notification 
  v-btn(slot="notif" flat fab small)
    img(src="../../../assets/svg/notification.svg")

  // -- profile menu
  v-menu(slot="avatar" bottom left) 
    v-btn(slot="activator" fab small)
      img(src="@/assets/svg/avatar.svg").round
    v-list
      v-list-tile(v-for="(item, i) in profileOptions" :key="i" @click="") 
        v-list-tile-title {{ item.text }}

</template>


<style lang="stylus" scoped>
</style>
