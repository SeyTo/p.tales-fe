<script>
import EmpLoggedinNavbar from '../shared/components/navbars/emp-loggedin-navbar'
import EmpLoggedinNavdraw from '../shared/components/navdrawers/emp-loggedin-navdraw'

/**
 *
 */
export default {
  name: 'employer-profile',

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

  v-container
    v-layout
      v-flex
        | Under-construction

</template>

<style lang="stylus">
</style>
