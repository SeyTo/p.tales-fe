<script>
import TalesNavBar from '../shared/components/tales-navbar'
import TalesNavDrawer from '../shared/components/tales-navdrawer'

import EmpNavbarLogged from '../shared/components/navbar-slots/emp-navbar-logged.vue'

export default {
  name: 'emp-search',

  data () {
    return {
      filterHidden: false
    }
  },

  components: {
    'tales-navbar': TalesNavBar,
    'tales-navdrawer': TalesNavDrawer,
    'emp-navbar-logged': EmpNavbarLogged
  },

  method: {
    do () { }
  }

}
</script>


<template lang="pug">
div
  tales-navbar
    emp-navbar-logged

  tales-navdrawer
    emp-navbar-logged(compactView="true")

  v-container(fluid)
    .search-container
      v-text-field(solo label="Search").search-bar

    // -- main container
    .body-container
      // -- master filter (pre-filter)
      v-card(ref="filter" v-if="!filterHidden")#filter.ml-3.mt-3
        | master filter
      .search-body
        // -- post-filter for results
        #result-filter(ref="resultFilter").ml-3.mt-3.mr-3
          | result filter
        // -- contains a list of results 
        v-layout.result-container.ml-3.mt-3.mr-3
          v-flex
            | result container
          
  v-btn(@click.stop="filterHidden = !filterHidden") DO IT
</template>


<style lang="stylus">
.search-container
  width 100%
  .search-bar
    margin auto 
    max-width 800px
    background-color blue
.body-container
  display flex
  background-color green
  #filter
    flex 0 0 auto
    background-color aqua
    min-height 500px
    max-width 200px
    min-width 200px
  .search-body
    flex 1 1 auto
    background-color purple
    #result-filter 
      background-color yellow
      min-height 40px

    .result-container
      background-color red
      min-height 100px
      min-width 100px
    
</style>
