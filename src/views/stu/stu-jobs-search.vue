<script>

/**
 * Jobs search page.
 */
export default {
  name: 'stu-jobs-search',

  data () {
    return { }
  },

  components: { }
}
</script>


<template lang="pug">
v-container
  // -- main search bar
  .search-container
    v-text-field(solo label="Search").search-bar

  // -- master filter
  div#filter.ml-3.mt-3
    | master filter

  // -- result container
  v-layout(wrap)#result-container
    v-flex(v-for="i in 10" :key="i")
        v-card {{ i }} Testing
</template>


<style lang="stylus" scoped>
.search-container
  width 100%
#filter
  backgroud-color green
  width 100%
#result-container
  backgroud-color red
  width 100%
  .card
    max-width 304px
    min-width 304px 
    min-height 200px
</style>
