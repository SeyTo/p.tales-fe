<script>
import BaseNavdrawer from './base-navdrawer'
import StuAuthTab from '@/shared/components/dialog/stu-authtab.vue'

export default {
  name: 'emp-loggedout-navdraw',

  data () {
    return {
      authDialogToggle: false
    }
  },

  components: {
    'stu-auth-tab': StuAuthTab,
    'base-navdrawer': BaseNavdrawer
  }

}
</script>


<template lang="pug">
base-navdrawer
  template
    img(src="@/assets/svg/favicon.svg" height="64").ma-4
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
.navigation-drawer
  display flex
  flex-direction column
</style>
