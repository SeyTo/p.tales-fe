<script>
export default {
  name: 'job-desc-card',

  props: [
    'job'
  ],

  data () {
    return { }
  },

  computed: { },

  components: { }
}
</script>


<template lang="pug">
v-card
  v-card-title {{ job.role }}
  v-divider
  v-container(fluid)
    v-layout(column)
      v-flex
        | User Data
      v-flex
        | About Job
      v-flex
        | Deadline
      v-flex
        | Buttons bar


</template>


<style lang="stylus" scoped>
</style>
