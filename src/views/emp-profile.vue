<script>
import TalesNavBar from '../shared/components/tales-navbar'
import TalesNavDrawer from '../shared/components/tales-navdrawer'

import EmpNavbarLogged from '../shared/components/navbar-slots/emp-navbar-logged.vue'

/**
 *
 */
export default {
  name: 'employer-profile', 

  components: {
    'tales-navbar': TalesNavBar,
    'tales-navdrawer': TalesNavDrawer,
    'emp-navbar-logged': EmpNavbarLogged
  }
}
</script>

<template lang="pug">
div
  tales-navbar
    emp-navbar-logged

  tales-navdrawer
    emp-navbar-logged(compactView="true")

  | Tesing

</template>

<style lang="stylus">
</style>
