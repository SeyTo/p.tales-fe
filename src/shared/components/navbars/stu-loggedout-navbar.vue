<script>
import TalesNavBar from '../tales-navbar'
import StuAuthTab from '../stu-authtab'

export default {
  name: 'stu-loggedout-navbar',

  data () {
    return {
      authDialogToggle: false
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
      v-btn(flat large) FOR EMPLOYERS
      v-btn(flat large) Blogs
      v-btn(
          flat 
          large 
          @click.native.stop="authDialogToggle = !authDialogToggle"
        ) Log In
      v-btn(
          depressed 
          large 
          color="primary" 
          @click.native.stop="authDialogToggle = !authDialogToggle"
        ) Sign Up
  // -- dialogs
  stu-auth-tab(v-model="authDialogToggle")

</template>


<style lang="stylus">
</style>
