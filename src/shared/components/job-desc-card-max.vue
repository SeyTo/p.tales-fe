<script>
export default {
  name: 'job-desc-card-max',

  props: {
    'job': { type: Object },
    'hasApplied': {
      default: false,
      type: Boolean
    }
  },

  data: () => ({ }),

  computed: { },

  components: { }
}
</script>


<template lang="pug">
mixin buttonsBar
  v-layout(v-show="!hasApplied").buttons-bar.mt-2
    div
      v-btn(depressed icon) 
        v-icon favorite
    v-flex.apply-btn-contain
      v-btn(depressed block color="primary") Apply
    div
      v-btn(depressed icon)
        v-icon star

  v-layout(v-show="hasApplied").buttons-bar.mt-2
    v-btn(depressed small) Got An Interview
    v-btn(depressed small).ml-1 Got Hired
    v-btn(depressed small).ml-1 Haven't heard
    div
      v-btn(depressed icon small).ml-1
        v-icon more_vert

v-card(v-if="job")
  v-card-title.card-title.headline.bold {{ job.role }}
  v-btn(block flat) Learn more about that stuff here
  v-container(fluid)
    v-layout(column)
      v-flex
        v-layout(row)
          v-avatar.mr-3
            img(src="@/assets/svg/twitter.svg")
          v-flex
            .subheading {{ job.emp.name }}
            .body-1 {{ job.emp.address }}
      v-flex.about.mt-3.mb-3
        | {{ job.about }}
      v-flex.italics
        | Deadline: {{ job.deadline }}

      // buttons bar
      +buttonsBar

</template>


<style lang="stylus" scoped>
.card
  max-width 500px
.bold
  font-weight bold
.italics
  font-style italic
</style>
