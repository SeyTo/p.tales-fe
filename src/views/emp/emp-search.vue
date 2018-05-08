<script>
import StuDescCard from '@/shared/components/stu-desc-card'

export default {
  name: 'emp-search',

  data () {
    return {
      filterDrawer: true,
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
mixin filter
  v-list#filter
    v-list-tile
      v-text-field(label="filter this filter" hide-details)
    v-list-tile
      v-list-tile-content
        v-btn(label="filter this filter" flat block) Prioritize my filters
    v-list-tile
      v-checkbox(label="Is available for quick hire" hide-details)

    v-divider
      
    v-subheader.primary--text Job Time
    v-list-tile
      v-checkbox(label="Part Time" hide-details)
      v-checkbox(label="Full Time" hide-details)

    v-divider

    v-subheader.primary--text Degree
    v-list(dense)
      v-list-tile
        v-checkbox(label="Any" hide-details)
        v-checkbox(label="M.D" hide-details)
      v-list-tile
        v-checkbox(label="SLC" hide-details)
        v-checkbox(label="Secondary" hide-details)
      v-list-tile
        v-checkbox(label="Bachelor's" hide-details)
        v-checkbox(label="Ph.D" hide-details)
      v-list-tile
        v-checkbox(label="Masters" hide-details)
        v-checkbox(label="Other" hide-details)

    v-divider

    v-subheader.primary--text Major
    v-text-field(hint="Type multiple majors with commas")

    v-divider

    v-subheader.primary--text Lives near
    v-text-field(hint="Type multiple locations using commas")

    v-divider

    v-subheader.primary--text Certifications
    v-list-tile
      v-text-field(hint="Type multiple certifications using commas")
    v-subheader.primary--text Colleges and Universities
    v-list(dense)
      v-list-tile
        v-checkbox(label="All colleges" hide-details)
      v-list-tile
        v-checkbox(label="Colleges near me" hide-details)
      v-list-tile
        v-text-field(single-line label="College or University name" hint="Type multiple colleges using commas")

    v-divider

    v-subheader.primary--text Graduation Year
    v-list(dense)
      v-list-tile
        v-text-field(label="from" single-line hide-details).pr-2
        v-text-field(label="to" single-line hide-details) 
      v-list-tile
        // TODO range slider will be added with vuetify 1.1 Q1, 2018

    v-divider

    v-subheader.primary--text GPA
    v-list(dense)
      v-list-tile
        v-text-field(label="from" single-line hide-details).pr-2
        v-text-field(label="to" single-line hide-details) 
      v-list-tile
        // TODO range slider will be added with vuetify 1.1 Q1, 2018

    v-divider

    v-subheader.primary--text Languages
    v-text-field(hint="Type multiple languages using commas" single-line)

    v-divider

    v-subheader.primary--text Skills or Technical Skills 
    v-text-field(hint="Type multiple skills using commas" single-line)

    v-divider
    v-subheader.primary--text Work History
    v-list(dense)
      v-list-tile
        v-text-field(label="Years of experience" hint="Leave blank for any").pr-2
      v-list-tile
        // TODO range slider will be added with vuetify 1.1 Q1, 2018
      v-list-tile
        v-text-field(label="Has experience in fields" hide-details).pr-2
      v-list-tile
        // TODO range slider will be added with vuetify 1.1 Q1, 2018

    v-divider
    v-subheader.primary--text Gigs & Freelances
    v-list-tile 
      v-text-field(label="Has freelancing experience in" hint="Use commas to list multiple experiences").pr-2
    
    v-divider
    v-subheader.primary--text Leadership
    v-list-tile 
      v-text-field(label="Has leadership experience in" hint="Use commas to list multiple experiences").pr-2

    v-divider
    v-subheader.primary--text Social Media

    v-divider
    v-subheader.primary--text Volunteers

    v-divider
    v-subheader.primary--text Gender

    v-divider
    v-subheader.primary--text Age

    v-divider
    v-subheader.primary--text Field of interests

        

div
  v-navigation-drawer(app v-model="filterDrawer").nava
    v-toolbar(flat)
      .title.pa-3 Filter
      v-spacer
      v-btn(icon @click="filterDrawer = false") 
        v-icon close

    v-divider
    +filter 

  v-container(fluid).pa-0
    // -- filter nav drawer
    v-flex
      v-container(fluid).pl-0.pr-0
        v-layout(column)
          .display-1.text-xs-center Search students faster.
          v-layout(justify-center).search-container
            v-text-field(solo label="Search").t-search-tf
            v-btn(large color="primary").search-btn Search 
          
          // -- contains a list of results 
          v-layout(justify-center).result-wrapper
            v-layout(wrap).result-container
              template(v-for="i in 5")
                stu-desc-card.ml-3.mt-3



  // -- fab
  v-fab-transition
    v-btn(
        :key="'filterDialogFab'"
        slot="activator" 
        fab 
        fixed bottom right 
        hover 
        @click="filterDrawer = true"
        v-if="filterDrawer === false"
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

<style lang="stylus" scoped">
@import '../../assets/styles/_vars.styl'
.test
  float left
.nava
  height 800px !important
.search-btn
  height 46px
  margin 0 !important
.result-wrapper
  display flex
  justify-content center 
.result-container
  max-width t-triple-col-w + (16px * 2)
.search-container
  margin t-spacer
.short
  max-width 200px
#filter
  // .checkboxddk
  .input-group
    // padding-top 0 !important
@media $display-breakpoints.sm-only
  .result-container
    max-width t-double-col-w + (16px * 2)
@media $display-breakpoints.xs-only
  .result-container
    max-width t-single-col-w + (16px * 2)
  .result-container
    // justify-content center !important
  .search-container
    margin t-spacer 0 !important
@media sm-and-down
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

