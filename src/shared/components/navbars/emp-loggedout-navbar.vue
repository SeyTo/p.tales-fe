<script>
import BaseNavbar from './base-navbar'
import EmpAuthTab from '@/shared/components/dialog/emp-authtab.vue'

export default {
  name: 'emp-loggedout-navbar',

  data () {
    return {
      authDialogToggle: false
    }
  },

  components: {
    // TODO replace
    'emp-auth-tab': EmpAuthTab,
    'base-navbar': BaseNavbar
  },

  methods: {
    validateForm (value) {
      this.authDialogToggle = false

      if (value === 'login') {
        this.$router.push(
            { name: 'EmployerProfile' },
            () => { this.$store.commit('setUserLoggedIn', { loggedIn: true }) },
            function () { console.log('aborted') }
          )
      } else if (value === 'signup') {
        this.$router.push(
            { name: 'EmployerPostSignupQuery' }
          )
      } else {
        console.log('unknown value: ' + value)
      }
    }
  }
}
</script>


<template lang="pug">
base-navbar
  v-btn(
      depressed
      :to="{ name: 'Landing' }"
    ).transparent.fill-height.ma-0 FOR STUDENTS
  v-btn(
      depressed
      color="accent--text"
      @click.native.stop="authDialogToggle = !authDialogToggle"
    ).transparent.fill-height.ma-0 Log In
  v-btn(
      depressed
      color="primary"
      @click.native.stop="authDialogToggle = !authDialogToggle"
      ).fill-height.ma-0 SIGN UP

  // -- dialogs
  emp-auth-tab(v-model="authDialogToggle" @validate="validateForm")

</template>


<style lang="stylus" scoped>
</style>
