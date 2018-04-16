<script>
import StuLoggedinNavbar from '@/shared/components/navbars/stu-loggedin-navbar'
import StuLoggedinNavdraw from '@/shared/components/navdrawers/stu-loggedin-navdraw'

export default {
  name: 'stu-jobs-search',

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
    .search-container
      v-text-field(solo label="Search").search-bar

    // -- master filter
    div#filter.ml-3.mt-3
      | master filter

    // -- result container
    v-layout(wrap)#result-container
      v-flex(v-for="i in 10")
          v-card {{ i }} Testing
</template>


<style lang="stylus" scoped>
.search-container
  width 100%
#filter
  backgroud-color green
  width 100%
#result-container
  backgroud-color red
  width 100%
  .card
    max-width 304px
    min-width 304px 
    min-height 200px
</style>
