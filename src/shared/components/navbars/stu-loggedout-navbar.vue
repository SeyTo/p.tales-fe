<script>
import BaseNavbar from './base-navbar'
import StuAuthTab from '@/shared/components/dialog/stu-authtab'

export default {
  name: 'stu-loggedout-navbar',

  data () {
    return {
      authDialogToggle: false,
      authDialog: {
        model: false
      },
      activeTabIndex: 0
    }
  },

  computed: {
  },

  methods: {
    openDialog (tabIndex) {
      this.authDialog.model = true
      this.activeTabIndex = tabIndex
      // FIXME: tab index is supposed to open set select tab by index, there is a bug
      // in vuetify. Hope they will fix it by release. else we will have to simulate
      // a click for now.
    },
    validateForm (value) {
      // TODO move validator to core.
      this.authDialog.model = false
      console.log(value)

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
  },

  components: {
    'base-navbar': BaseNavbar,
    'stu-auth-tab': StuAuthTab
  }
}
</script>


<template lang="pug">

div
  base-navbar
    v-btn(
      depressed 
      color="primary--text"
      :to="{ name: 'EmployerLanding' }").transparent.fill-height.ma-0 FOR EMPLOYERS
    v-btn(
      depressed 
      color="primary--text"
      :to="{ name: 'BlogsLanding' }").transparent.fill-height.ma-0 Blogs
    v-btn(
      depressed
      color="accent--text"
      @click.native.stop="openDialog(0)"
    ).transparent.bold.fill-height.ma-0 Login
    v-btn(
      depressed
      color="primary"
      @click.native.stop="openDialog(1)"
    ).bold.fill-height.ma-0 Sign Up
      //
  // -- dialogs
  v-dialog(lazy v-model="authDialog.model")
    stu-auth-tab(:activeTab="activeTabIndex" @validate="validateForm")

</template>


<style lang="stylus" scoped>
.color
  height 20px
  width 20px
</style>
