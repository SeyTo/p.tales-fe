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
v-card(hover)
  v-card-title.card-title {{ job.role }}
  v-divider
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
// TODO generalize
_about_height = 80px
.buttons-bar
  .btn
    margin 0
  .apply-btn
    margin 0 (16px * 0.5)
.about
  min-height 80px
  max-height 80px
  text-overflow ellpises
  overflow hidden
// TODO generalize
.italics
  font-style italic
</style>
