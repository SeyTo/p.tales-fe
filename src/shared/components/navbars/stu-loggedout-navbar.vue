<script>
import TalesNavBar from '../tales-navbar'
import StuAuthTab from '@/shared/components/dialog/stu-authtab'

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
      v-btn(depressed) FOR EMPLOYERS
      v-btn(depressed) Blogs
      v-btn(depressed @click.native.stop="authDialogToggle = !authDialogToggle") Log In
      v-btn(
          depressed 
          color="primary" 
          @click.native.stop="authDialogToggle = !authDialogToggle"
        ) Sign Up
  // -- dialogs
  stu-auth-tab(v-model="authDialogToggle")

</template>


<style lang="stylus">
</style>
