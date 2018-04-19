<script>
export default {
  name: 'job-desc-card-max',

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
v-card(hover)
  v-card-title.card-title {{ job.role }}
  v-btn(block flat) Learn more about that stuff here
  v-container(fluid)
    v-layout(column)
      v-flex
        v-layout(row)
          div 
            v-avatar
              img(src="@/assets/svg/twitter.svg")
          v-flex
            div {{ job.emp.name }}
            div {{ job.emp.address }}
      v-flex.about.mt-2.mb-2
        | {{ job.about }}
      v-flex.italics
        | Deadline: {{ job.deadline }}
      v-layout.buttons-bar
        div
          v-btn(flat icon) 
            v-icon favorite
        v-flex.apply-btn-contain
          v-btn(flat block color="primary") Apply
        div
          v-btn(flat icon)
            v-icon star

</template>


<style lang="stylus" scoped>
.card
  max-width 500px
</style>
