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
      selectedJobIndex: 0
    }
  },

  components: {
    'job-desc-card': JobDescCard,
    'job-desc-card-max': JobDescCardMax
  },

  methods: {
    openJobDialog (i) {
      this.selectedJobIndex = i
      this.dialog = true
    }
  }
}
</script>


<template lang="pug">
// TODO increase container width
v-container(fluid)
  v-layout(column)
    // -- main search bar
    .search-container
      v-text-field(solo label="Search").search-bar

    // -- master filter
    v-container(grid-list-md v-if="!this.$vuetify.breakpoint.smAndDown")#filter
      // v-card.pt-3.pl-3.pr-3.pb-2
      v-layout
        v-flex
          v-select(label="Jobs By Categories"  hide-details dense single-line)
        v-flex
          v-select(label="Jobs By Industries"  hide-details dense single-line)
        v-flex
          v-select(label="Jobs By Types"  hide-details dense single-line)
        v-flex
          v-select(label="Jobs By Location"  hide-details dense single-line)
        v-flex
          v-select(label="Relevant Jobs First"  hide-details dense single-line)
      v-layout(justify-space-between).mt-1.mb-1
        v-flex
          v-checkbox(label="Paid Only" hide-details v-model="isPaid")
        div
          v-btn(flat).ma-0 Reset

    // -- result container
    div.result-wrapper
      div.result-container
        div(v-for="(i, index) in jobs")
          job-desc-card(:job="i" @click.native.stop="openJobDialog(index)")

  v-dialog(v-model="dialog" max-width="500px")
    job-desc-card-max(:job="jobs[selectedJobIndex]")
</template>


<style lang="stylus" scoped>
_card_pad = (16 * 1)px
_card_width = 300px
_card_container_width_triple = (3 * _card_width) + (4 * _card_pad)
_card_container_width_double = (2 * _card_width) + (3 * _card_pad)
_card_container_width_single = (1 * _card_width) + (2 * _card_pad)
.search-container
  width 100%
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
@media screen and (max-width: _card_container_width_triple)
  .result-container
    width _card_container_width_double !important
@media screen and (max-width: _card_container_width_double)
  .result-container
    width _card_container_width_single !important
</style>
