<script>
import StuLoggedoutNavBar from '../shared/components/navbars/stu-loggedout-navbar'
import StuLoggedoutNavDrawer from '../shared/components/navdrawers/stu-loggedout-navdraw'

export default {
  name: 'landing',

  components: {
    'stu-loggedout-navbar': StuLoggedoutNavBar,
    'stu-loggedout-navdrawer': StuLoggedoutNavDrawer
  }
}
</script>


<template lang="pug">
v-container(fluid fill-height)
  stu-loggedout-navbar
  stu-loggedout-navdrawer

  v-container
    v-layout(column align-center)
      img(src="@/assets/favicon.64.png" alt="Tales logo") 
</template>


<style lang="stylus" scoped>
</style>
