<script>
export default {
  name: 'emp-listings-applications',

  data () {
    return { }
  },

  computed: { },

  components: { }
}
</script>


<template lang="pug">
v-container(fluid)
  v-layout(column justify-center)
    v-flex.display-1.text-xs-center Applications By Students
    v-container(fluid grid-list-md)
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
      v-layout(justify-space-between)
        div.btn-width
        div.component-width
          v-select(label="Select Posting Title"  hide-details dense single-line)
        div
          v-btn(rounded) Reset
    v-flex
      | test
        


</template>


<style lang="stylus" scoped>
.btn-width
  width 104px
.component-width
  width 203px
</style>
