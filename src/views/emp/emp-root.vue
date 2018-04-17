<script>
import EmpLoggedinNavbar from '@/shared/components/navbars/emp-loggedin-navbar'
import EmpLoggedinNavdraw from '@/shared/components/navdrawers/emp-loggedin-navdraw'

export default {
  name: 'emp-root',

  data () {
    return { }
  },

  components: {
    'emp-loggedin-navbar': EmpLoggedinNavbar,
    'emp-loggedin-navdraw': EmpLoggedinNavdraw
  }
}
</script>


<template lang="pug">
div
  emp-loggedin-navbar
  emp-loggedin-navdraw
  router-view

</template>


<style lang="stylus" scoped>
</style>
