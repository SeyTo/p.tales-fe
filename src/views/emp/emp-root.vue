<script>
import EmpLoggedinNavbar from '@/shared/components/navbars/emp-loggedin-navbar'
import EmpLoggedoutNavbar from '@/shared/components/navbars/emp-loggedout-navbar'
import EmpLoggedinNavdraw from '@/shared/components/navdrawers/emp-loggedin-navdraw'
import EmpLoggedoutNavdraw from '@/shared/components/navdrawers/emp-loggedout-navdraw'

export default {
  name: 'emp-root',

  data () {
    return { }
  },

  components: {
    'emp-loggedin-navbar': EmpLoggedinNavbar,
    'emp-loggedout-navbar': EmpLoggedoutNavbar,
    'emp-loggedin-navdraw': EmpLoggedinNavdraw,
    'emp-loggedout-navdraw': EmpLoggedoutNavdraw
  },

  mounted () {
    // TODO test purposes only
    this.$store.commit('setUserLoggedIn', { loggedIn: false })
  }
}
</script>


<template lang="pug">
div
  emp-loggedin-navbar(v-show="this.$store.getters.isUserLoggedIn")
  emp-loggedout-navbar(v-show="!this.$store.getters.isUserLoggedIn")
  emp-loggedin-navdraw(v-show="this.$store.getters.isUserLoggedIn")
  emp-loggedout-navdraw(v-show="!this.$store.getters.isUserLoggedIn")
  router-view

</template>


<style lang="stylus" scoped>
</style>
