<script>
import JobDescCard from '@/shared/components/job-desc-card'
import JobDescCardMax from '@/shared/components/job-desc-card-max'

var jobA = {
  role: 'Get me a tea gal',
  emp: {
    name: 'Tales',
    address: 'Somewhere in Nepal'
  },
  about: 'This is a song about the greatest song in the world. This is just a tribute.',
  deadline: 'Today. LOL'
}

var jobB = {
  role: 'Get me my hat boy',
  emp: {
    name: 'Yogurt Co.',
    address: 'Somewhere in Nepal'
  },
  about: 'We dont see the world the same way as us but we see the world as someone else. I dont know what Im talking at this point. So Im just going to stfu.',
  deadline: 'Yesterday. WTF'
}
/**
 * Jobs search page.
 */
export default {
  name: 'stu-jobs-search',

  data () {
    return {
      jobs: [
        jobA, jobB, jobA, jobB
      ],
      isPaid: false,
      dialog: false,
      selectedJobIndex: 0,
      filterDrawer: {
        model: true
      },
      infoDialog: {
        model: false
      },
      filterFab: {
        fixed: true,
        top: true,
        left: true,
        bottom: false,
        right: false
      }
    }
  },

  computed: {
    adjustFab () {
      if (this.$vuetify.breakpoint.smAndDown) {
        this.filterFab.fixed = true
        this.filterFab.top = false
        this.filterFab.bottom = true
        this.filterFab.right = true
        this.filterFab.left = false
      } else {
        this.filterFab.fixed = true
        this.filterFab.top = true
        this.filterFab.bottom = false
        this.filterFab.right = false
        this.filterFab.left = true
      }
      return this.filterFab.fixed
    }
  },
  components: {
    'job-desc-card': JobDescCard,
    'job-desc-card-max': JobDescCardMax
  },

  methods: {
    openJobDialog (i) {
      this.selectedJobIndex = i
      this.infoDialog.model = true
    }
  }
}
</script>


<template lang="pug">
mixin generalFilters
  v-list#filter
    v-list-tile
      v-btn(depressed block).ma-0 Reset Filter List
    v-list-tile
      v-checkbox(label="Quick hire jobs" hide-details)

    v-divider
      
    v-subheader.primary--text Job Time
    v-list-tile
      v-checkbox(label="Part Time" hide-details)
      v-checkbox(label="Full Time" hide-details) 

    v-divider

    v-subheader.primary--text Jobs By Categories

    v-divider

    v-subheader.primary--text Jobs By Industries

    v-divider

    v-subheader.primary--text Jobs By Type
    v-list-tile
      v-checkbox(label="Paid Only?" hide-details)

    v-divider

    v-subheader.primary--text Jobs By Location
    v-list-tile
      v-checkbox(label="Jobs near me only" hide-details)
    v-list-tile
      v-checkbox(label="I'd like to travel" hide-details)

    v-divider

    v-subheader.primary--text Jobs By Industries

    
// -- start here
v-container
  v-layout(column)
    v-flex
      .display-1.text-xs-center.mb-3 Search Jobs
    // -- main search bar
    v-layout(justify-center).search-container.mb-4
      v-text-field(
        solo 
        label="Search"
        prepend-icon="search"
      ).search-bar

    // -- filter drawer
    v-navigation-drawer(app v-model="filterDrawer.model").nava
      v-toolbar(flat color="white")
        v-icon filter_list
        .title.pa-3 Filter
        v-spacer
        v-btn(icon @click="filterDrawer.model = false") 
          v-icon close
      +generalFilters

    v-layout(justify-center)
      v-layout(wrap justify-start grid-list-lg)
        template(v-for="(i, index) in jobs")
          v-flex(md4 sm6 xs12).pa-2
            job-desc-card(:job="i" :hasApplied="false" @click.native.stop="openJobDialog(index)")
            
  // -- fab
  v-fab-transition
    v-btn(
      :key="'filterDialogFab'"
      slot="activator"
      hover fab
      :fixed="adjustFab"
      :top="filterFab.top"
      :bottom="filterFab.bottom"
      :right="filterFab.right"
      :left="filterFab.left"
      @click="filterDrawer.model = true"
      v-if="filterDrawer.model === false"
      color="white"
    ).navbar-height-adjust
      v-icon filter_list

  // -- info dialog
  // TODO remove universal dialog width
  v-dialog(v-model="infoDialog.model" max-width="500px")
    job-desc-card-max(:job="jobs[selectedJobIndex]" :hasApplied="false")

</template>


<style lang="stylus" scoped>
_card_pad = (16 * 1)px
_card_width = 300px
_card_container_width_triple = (3 * _card_width) + (4 * _card_pad)
_card_container_width_double = (2 * _card_width) + (3 * _card_pad)
_card_container_width_single = (1 * _card_width) + (2 * _card_pad)
.search-container
  width 100%
  .search-bar
    max-width 600px
.search-btn
  height 46px
.nava
  height 800px !important
#filter
  // end
.result-wrapper
  // background-color green
  display flex
  justify-content center
  .result-container
    // background-color red
    width _card_container_width_triple
    display flex
    justify-content flex-start 
    flex-wrap wrap
    padding-right _card_pad
    .card
      max-width _card_width
      width _card_width
      min-height 200px
      margin _card_pad 0 0 _card_pad 

.navbar-height-adjust
  margin-top 62px
@media screen and (max-width: _card_container_width_triple)
  .result-container
    width _card_container_width_double !important
@media screen and (max-width: _card_container_width_double)
  .result-container
    width _card_container_width_single !important

</style>
