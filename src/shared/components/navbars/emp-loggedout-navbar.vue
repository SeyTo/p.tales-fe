<script>
import TalesNavbar from '@/shared/components/tales-navbar'
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
    'tales-navbar': TalesNavbar
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
tales-navbar
  div
    v-btn(
        flat
        :to="{ name: 'Landing' }"
      ) FOR STUDENTS
    v-btn(
        flat
        @click.native.stop="authDialogToggle = !authDialogToggle"
      ) Log In
    v-btn(
        depressed
        color="primary"
        @click.native.stop="authDialogToggle = !authDialogToggle"
        ) SIGN UP

  // -- dialogs
  emp-auth-tab(v-model="authDialogToggle" @validate="validateForm")

</template>


<style lang="stylus" scoped>
</style>
