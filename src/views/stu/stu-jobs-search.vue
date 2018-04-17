<script>
import JobDescCard from '../../shared/components/job-desc-card'

/**
 * Jobs search page.
 */
export default {
  name: 'stu-jobs-search',

  data () {
    return {
      job: {
        role: 'Get me a tea gal'
      }
    }
  },

  components: {
    'job-desc-card': JobDescCard
  }
}
</script>


<template lang="pug">
v-container
  v-layout(column)
    // -- main search bar
    .search-container
      v-text-field(solo label="Search").search-bar

    // -- master filter
    div#filter.ml-3.mt-3
      | master filter

    // -- result container
    div.result-wrapper
      div.result-container
        div(v-for="i in 4" :key="i")
          job-desc-card(:job="job") 
</template>


<style lang="stylus" scoped>
_card_pad = (16 * 1)px
_card_width = 250px
_card_container_width_triple = (3 * _card_width) + (4 * _card_pad)
_card_container_width_double = (2 * _card_width) + (3 * _card_pad)
_card_container_width_single = (1 * _card_width) + (2 * _card_pad)
.search-container
  width 100%
#filter
  background-color blue
  width 100%
.result-wrapper
  background-color green
  display flex
  justify-content center
  .result-container
    background-color red
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
