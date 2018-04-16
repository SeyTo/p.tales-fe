<script>
import EmpLoggedoutNavbar from '../shared/components/navbars/emp-loggedout-navbar'
import EmpLoggedoutNavdraw from '../shared/components/navdrawers/emp-loggedout-navdraw.vue'

export default {
  name: 'emp-landing',

  data () {
    return { }
  },

  components: {
    'emp-loggedout-navbar': EmpLoggedoutNavbar,
    'emp-loggedout-navdraw': EmpLoggedoutNavdraw
  }
}
</script>


<template lang="pug">
div
  emp-loggedout-navbar
  emp-loggedout-navdraw

  v-container(fluid)
    v-slide-y-transition(mode="out-in") 
      v-layout(column align-center)
        img(src="@/assets/favicon.64.png" alt="Tales logo" class="my-5") 
        h1 Tales Employer Landing Page
</template>


<style lang="stylus">
</style>
