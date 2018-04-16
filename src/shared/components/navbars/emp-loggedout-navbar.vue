<script>
import TalesNavbar from '../tales-navbar'
import StuAuthTab from '../stu-authtab.vue'

export default {
  name: 'emp-loggedout-navbar',

  data () {
    return {
      authDialogToggle: false
    }
  },

  components: {
    // TODO replace
    'stu-auth-tab': StuAuthTab,
    'tales-navbar': TalesNavbar
  }
}
</script>


<template lang="pug">
tales-navbar
  template
    v-btn(
        flat 
        large
        @click=""
      ) FOR STUDENTS
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
        ) SIGN UP

  // -- dialogs
  stu-auth-tab(v-model="authDialogToggle")

</template>


<style lang="stylus" scoped>
</style>
