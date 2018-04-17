<script>
import StuLoggedinNavbar from '@/shared/components/navbars/stu-loggedin-navbar'
import StuLoggedinNavdraw from '@/shared/components/navdrawers/stu-loggedin-navdraw'

/**
 * Is the root container for student branch. Only AFTER the student LOG IN.
 */
export default {
  name: 'stu-root',

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
  router-view

</template>

<style lang="stylus" scoped>
</style>
