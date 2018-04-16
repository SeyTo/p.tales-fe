<script>
import EmpLoggedinNavbar from '../shared/components/navbars/emp-loggedin-navbar'
import EmpLoggedinNavdraw from '../shared/components/navdrawers/emp-loggedin-navdraw'

export default {
  name: 'emp-search',

  data () {
    return {
      filterShow: false,
      resultFilterShow: false,
      filterDialog: false
    }
  },

  components: {
    'emp-loggedin-navbar': EmpLoggedinNavbar,
    'emp-loggedin-navdraw': EmpLoggedinNavdraw
  },

  computed: {
    onSmall () {
      if (this.$vuetify.breakpoint.smAndDown) {
        console.log('lgAndDown')
        this.filterShow = false
        this.resultFilterShow = false
        return true
      } else if (this.$vuetify.breakpoint.smAndUp) {
        console.log('lgAndUp')
        this.filterShow = true
        this.resultFilterShow = true
        return false
      }
    }
  },

  method: { },

  watch: { },

  mounted () {
    // watch window size
    // let that = this
    // this.$nextTick(function () {
    //   window.addEventListener('resize', function (e) {
    //     that.windowHeight = window.innerHeight
    //   })
    // })
  }

}
</script>


<template lang="pug">
div
  emp-loggedin-navbar
  emp-loggedin-navdraw

  v-container(fluid)
    .search-container
      v-text-field(solo label="Search").search-bar

    // -- main container
    .body-container
      // -- master filter (pre-filter)
      v-card(ref="filter" v-if="filterShow")#filter.ml-3.mt-3
        | master filter

      // -- result container + result filter
      div.search-body
        // -- post-filter for results
        v-layout(ref="resultFilter" v-if="resultFilterShow" wrap)#result-filter.ml-3.mt-3.mr-3
          template(v-for="i in 10")
            v-checkbox(:label="'filter' + i")

        // -- contains a list of results 
        v-layout(wrap).result-container.ml-3.mt-3.mr-3
          template(v-for="i in 10")
            v-card {{ i }} Testing

  // -- fab
  v-menu(left top v-if="onSmall")#master-fab
    v-btn(slot="activator" fab hover @click="filterDialog = true")
      img(src="@/assets/svg/filter.svg").round

  // -- filter dialog
  v-dialog(fullscreen transition="dialog-bottom-transition" :overlay="false" v-model="filterDialog").filter-dialog
    v-card
      v-card-title Testing
      v-card-text
        | more testing
        v-btn(@click="filterDialog = false") Close

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
      justify-content start
      .card
        max-width 304px
        min-width 304px 
        min-height 200px
#master-fab
  position fixed !important
  right 34px
  bottom 64px
// @media screen and (min-width: 601px)
//   .menu
//     display none !important
    
@media screen and (max-width: 600px)
  .result-container
    justify-content center !important
@media screen and (max-width: 450px)
  .card
    // TODO remove
    max-width 100% !important
    min-width 100% !important
    width 100% !important
</style>

