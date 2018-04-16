<script>
import StuLoggedoutNavBar from '../shared/components/navbars/stu-loggedout-navbar'
import StuLoggedoutNavDrawer from '../shared/components/navdrawers/stu-loggedout-navdraw'

export default {
  name: 'landing',

  mounted () { },

  beforeDestroy () { },

  components: {
    'stu-loggedout-navbar': StuLoggedoutNavBar,
    'stu-loggedout-navdrawer': StuLoggedoutNavDrawer
  }
}
</script>


<template lang="pug">
div
  stu-loggedout-navbar
  stu-loggedout-navdrawer

  v-container(fluid)
    v-slide-y-transition(mode="out-in") 
      v-layout(column align-center)
        img(src="@/assets/favicon.64.png" alt="Tales logo" class="my-5") 
        h1 Tales
</template>


<style lang="stylus" scoped>
</style>
