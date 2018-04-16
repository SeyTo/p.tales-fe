<script>
import TalesNavBar from '../shared/components/tales-navbar'
import TalesNavDrawer from '../shared/components/tales-navdrawer'
import EmpNavbarLanding from '../shared/components/navbar-slots/emp-navbar-landing'
import EmpLoggedoutNavbar from '../shared/components/navbars/emp-loggedout-navbar'
import EmpLoggedoutNavdraw from '../shared/components/navdrawers/emp-loggedout-navdraw.vue'

export default {
  name: 'emp-landing',

  data () {
    return { }
  },

  components: {
    'tales-navbar': TalesNavBar,
    'tales-navdrawer': TalesNavDrawer,
    'emp-navbar-landing': EmpNavbarLanding,
    'emp-loggedout-navbar': EmpLoggedoutNavbar,
    'emp-loggedout-navdraw': EmpLoggedoutNavdraw
  }
}
</script>


<template lang="pug">
div
  emp-loggedout-navbar
  emp-loggedout-navdraw
  // tales-navbar
  //   emp-navbar-landing

  // tales-navdrawer
  //   emp-navbar-landing(compactView="true")

  v-container(fluid)
    v-slide-y-transition(mode="out-in") 
      v-layout(column align-center)
        img(src="@/assets/favicon.64.png" alt="Tales logo" class="my-5") 
        h1 Tales Employer Landing Page
</template>


<style lang="stylus">
</style>
