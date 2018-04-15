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
        v-layout(ref="resultFilter" wrap)#result-filter.ml-3.mt-3.mr-3
          template(v-for="i in 10")
            v-checkbox(:label="'filter' + i")

        // -- contains a list of results 
        v-layout(wrap).result-container.ml-3.mt-3.mr-3.justify-center
          template(v-for="i in 10")
            v-card {{ i }} Testing
  v-btn(@click.stop="filterHidden = !filterHidden") DO IT

  v-menu(left top) 
    v-btn(slot="activator" fab hover)
      img(src="@/assets/svg/avatar.svg").round
    v-list
      v-list-tile(@click="") 
        v-list-tile-title Filter Cards
      v-list-tile(@click="") 
        v-list-tile-title Filter Results

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
    max-height 500px
    max-width 200px
    min-width 200px
  .search-body
    flex 1 1 auto
    background-color purple
    #result-filter 
      background-color yellow
      min-height 40px
      .checkbox
        min-width 100px  
        flex-grow 0

    .result-container
      background-color red
      min-height 100px
      min-width 100px
      // justify-content center
      .card
        max-width 304px
        min-width 304px 
        min-height 200px
.menu
  position fixed !important
  right 34px
  bottom 64px
@media screen and (min-width: 601px)
  .menu
    display none !important

@media screen and (max-width: 600px)
  #result-filter
    display none
      
@media screen and (max-width: 450px)
  #filter 
    display none
  .card
    max-width 100% !important
    min-width 100% !important
    width 100% !important
</style>

