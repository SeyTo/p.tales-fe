<script>
import TalesNavBar from '../tales-navbar'
import StuAuthTab from '@/shared/components/dialog/stu-authtab'

export default {
  name: 'stu-loggedout-navbar',

  data () {
    return {
      authDialogToggle: false,
      activeTabIndex: 0
    }
  },

  computed: {
  },

  methods: {
    openDialog (tabIndex) {
      this.authDialogToggle = !this.authDialogToggle
      this.activeTabIndex = tabIndex
    }
  },

  components: {
    'tales-navbar': TalesNavBar,
    'stu-auth-tab': StuAuthTab
  }
}
</script>


<template lang="pug">
div
  tales-navbar
    div
      v-btn(depressed) FOR EMPLOYERS
      v-btn(depressed) Blogs
      v-btn(
        depressed 
        @click.native.stop="openDialog(0)"
      ) Log In
      v-btn(
        depressed 
        color="primary" 
        @click.native.stop="openDialog(1)"
      ) Sign Up
  // -- dialogs
  stu-auth-tab(v-model="authDialogToggle" :activeTab="activeTabIndex")

</template>


<style lang="stylus">
</style>
