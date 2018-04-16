<script>
import StuLoggedinNavbar from '../shared/components/navbars/stu-loggedin-navbar'
import StuLoggedinNavdraw from '../shared/components/navdrawers/stu-loggedin-navdraw'

export default {
  name: 'stu-jobsearch',

  data () {
    return { }
  },

  components: {
    'stu-loggedin-navbar': StuLoggedinNavbar,
    'stu-loggedin-navdraw': StuLoggedinNavdraw
  }
}
</script>


<template lang="pug">
div
  stu-loggedin-navbar(:lockNotif="true")
  stu-loggedin-navdraw

  v-container
    v-layout
      v-flex
        | Under Construction
</template>


<style lang="stylus" scoped>
</style>
