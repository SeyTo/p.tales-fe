<script>
import BaseNavdrawer from './base-navdrawer'
// TODO remove to universal dialog
import StuAuthTab from '@/shared/components/dialog/stu-authtab'

export default {
  name: 'stu-loggedout-navdraw',

  data () {
    return {
      authDialogToggle: false
    }
  },

  components: {
    'base-navdrawer': BaseNavdrawer,
    'stu-auth-tab': StuAuthTab
  }
}
</script>


<template lang="pug">
base-navdrawer.navdrawer
  template
    img(src="../../../assets/svg/favicon.svg" height="64").ma-4
    v-btn(flat large :to="{ name: 'EmployerLanding' }") FOR EMPLOYERS
    v-btn(flat large :to="{ name: 'BlogsLanding' }") Blogs
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


<style scoped lang="stylus">
.navdrawer
  display flex
  flex-direction column
</style>
