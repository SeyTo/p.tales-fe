<script>
import StuDescCard from '@/shared/components/stu-desc-card'

export default {
  name: 'emp-search',

  data () {
    return {
      filterShow: true,
      resultFilterShow: true,
      filterDialog: false,
      filterFab: true,
      selectiveFilter: {
        hideNameFilter: false,
        hideAboutMeFilter: false,
        hideProfilePicFilter: false,
        hideGradeFilter: false,
        hideUniversityFilter: false,
        hideDegreeFilter: false,
        sortByName: 'Sort In Ascending',
        sortByNameItems: [ 'Sort In Ascending', 'Sort In Descending' ],
        sortByRelevant: 'Sort By Relevant First',
        sortByRelevantItems: [ 'Sort By Relevant First', 'Sort By Filter' ],
        showAsList: 'Show as Card',
        showAsListItems: [ 'Show as List', 'Show as Card' ],
        showOnlyXFilter: 'Show only top 3 filters',
        showOnlyXFilterItems: [ 'Show only top 3 filters', 'Show all fitlers' ]
      }
    }
  },

  components: {
    'stu-desc-card': StuDescCard
  },

  computed: {
    onSmall () {
      if (this.$vuetify.breakpoint.smAndDown) {
        console.log('isSmall')
        this.filterShow = false
        this.resultFilterShow = false
        this.filterFab = true
        console.log(this.filterFab)
        return true
      } else if (this.$vuetify.breakpoint.mdAndUp) {
        console.log('isLarge')
        this.filterShow = true
        this.resultFilterShow = true
        this.filterFab = false
        return false
      }
    },
    filterFabVisibility () {
      if (this.$vuetify.breakpoint.smAndDown) {
        console.log('xs')
        this.filterShow = false
        this.resultFilterShow = false
        return true
      } else if (this.$vuetify.breakpoint.smAndUp) {
        console.log('!xs')
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
v-container(fluid).pa-0
  v-layout
    // -- filter nav drawer
    v-navigation-drawer
      v-toolbar(flat)
        v-list
          v-list-tile
            v-list-tile-title(class="title")
              | Filter
      v-divider
      | Test

    v-flex
      v-container(fluid)
        v-layout(column)
          v-layout(justify-center).search-container
            v-text-field(solo label="Search").t-search-tf
            v-btn(large color="primary").search-btn Search 
    // .display-1.text-xs-center Search students faster.


  // // -- main container
  // v-layout.body-container.pt-3
  //   // -- master filter (pre-filter)
  //   div
  //     v-card(ref="filter" v-if="filterShow")#filter.t-sidebar-w.pa-3
  //       .display-2 Master Filter

  //   // -- result container + result filter
  //   v-flex
  //     // -- contains a list of results 
  //     v-layout(wrap).result-container
  //       template(v-for="i in 5")
  //         stu-desc-card.ml-3.mt-3

  // // -- fab
  v-fab-transition
    v-btn(
        :key="'filterDialogFab'"
        slot="activator" 
        fab 
        fixed bottom right 
        hover 
        @click="filterDialog = true"
        v-if="filterFabVisibility"
      )
      img(src="@/assets/svg/filter.svg").t-fab-svg.round

  // // -- filter dialog
  // v-dialog(fullscreen transition="dialog-bottom-transition" :overlay="false" v-model="filterDialog").filter-dialog
  //   v-card
  //     v-card-title Testing
  //     v-card-text
  //       | All filters here
  //       v-btn(@click="filterDialog = false") Close

</template>

<style lang="stylus">
@import '../../assets/styles/_vars.styl'

.search-btn
  height 46px
  margin 0 !important
.body-container
  // background-color green
.result-container
  // background-color #fbc
  display flex
  justify-content flex-start
.search-container
  margin t-spacer
.short
  max-width 200px
@media $display-breakpoints.sm-and-down
  .result-container
    justify-content center !important
  .search-container
    margin t-spacer 0 !important
@media screen and (max-width: 450px)
  .card
    // TODO remove
    // max-width 100% !important
    // min-width 100% !important
    // width 100% !important
    margin-left 0 !important
    margin-right 0 !important
  .result-wrapper
    margin-left 0 !important
    margin-right 0 !important

</style>

