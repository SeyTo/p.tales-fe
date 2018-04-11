<script>
import TalesNavBar from '../shared/components/tales-navbar'
import StuNavbarLanding from '../shared/components/navbar-slots/stu-navbar-landing'
import TalesNavDrawer from '../shared/components/tales-navdrawer'

export default {
  name: 'landing',

  mounted () { },

  beforeDestroy () {  },

  components: {
    'tales-navbar': TalesNavBar,
    'tales-navdrawer': TalesNavDrawer,
    'stu-navbar-landing': StuNavbarLanding
  }
}
</script>


<template lang="pug">
div
  tales-navbar
    stu-navbar-landing

  tales-navdrawer
    stu-navbar-landing(compactView="true")

  v-container(fluid)
    v-slide-y-transition(mode="out-in") 
      v-layout(column align-center)
        img(src="@/assets/favicon.64.png" alt="Tales logo" class="my-5") 
        h1 Tales
</template>


<style lang="stylus" scoped>
h1
h2 
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

</style>
