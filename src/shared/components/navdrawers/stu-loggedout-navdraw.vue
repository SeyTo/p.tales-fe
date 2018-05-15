<script>
import BaseNavdrawer from './base-navdrawer'
import StuAuthTab from '@/shared/components/dialog/stu-authtab'

export default {
  name: 'stu-loggedout-navdraw',

  data () {
    return {
      authDialog: {
        model: false
      },
      activeTabIndex: 0
    }
  },

  components: {
    'base-navdrawer': BaseNavdrawer,
    'stu-auth-tab': StuAuthTab
  },

  methods: {
    openDialog (tabIndex) {
      this.authDialog.model = true
      this.activeTabIndex = tabIndex
    },
    validateForm (value) {
      // TODO move validator to core.
      this.authDialog.model = false
      this.$store.commit('setDrawerOpen', { open: false })

      if (value === 'login') {
        this.$router.push(
            { name: 'StudentProfile' },
            () => { this.$store.commit('setUserLoggedIn', { loggedIn: true }) },
            function () { console.log('aborted') }
          )
      } else if (value === 'signup') {
        this.$router.push(
            { name: 'StuPostSignupQuery' }
          )
      } else {
        console.log('unknown value: ' + value)
      }
    }
  }
}
</script>


<template lang="pug">
base-navdrawer.navdrawer
  template
    img(src="../../../assets/svg/favicon.svg" height="64").ma-4
    v-btn(
      depressed 
      large 
      :to="{ name: 'EmployerLanding' }").transparent.ma-0 FOR EMPLOYERS
    v-btn(
      depressed
      large 
      :to="{ name: 'BlogsLanding' }").transparent.ma-0 Blogs
    v-btn(
        depressed
        large
        color="accent--text"
        @click.native.stop="openDialog(0)"
      ).transparent.bold.ma-0 Log In
    v-btn(
        depressed
        large
        color="primary"
        @click.native.stop="openDialog(1)"
      ).bold.ma-0 Sign Up

  // -- dialogs
  v-dialog(lazy v-model="authDialog.model")
    stu-auth-tab(:activeTab="activeTabIndex" @validate="validateForm")

</template>


<style scoped lang="stylus">
.navdrawer
  display flex
  flex-direction column
</style>
