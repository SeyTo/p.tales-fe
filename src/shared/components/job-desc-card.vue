<script>
export default {
  name: 'job-desc-card',

  props: {
    'job': Object,
    /**
     * If student has applied for the job then the buttons bar changes to
     * show a different buttons bar.
     */
    'hasApplied': {
      default: false,
      type: Boolean
    },
    'pBookmark': {
      default: false,
      type: Boolean
    }
  },

  data: () => ({
    bookmark: this.pBookmark
  }),

  computed: { },

  methods: {
    bookmarkThis () {
      this.bookmark = !this.bookmark
      this.$emit('onBookmark', { value: this.bookmark })
    }
  },

  components: { }
}
</script>


<template lang="pug">
mixin buttonsBar
  v-layout(v-show="!hasApplied").buttons-bar.mt-2
    div
      v-btn(depressed icon @click.native.stop="bookmarkThis").mr-2
        v-icon(v-if="bookmark") bookmark
        v-icon(v-else) bookmark_outline
    v-flex.apply-btn-contain.mr-2
      v-btn(depressed block color="primary") Apply
    div
      v-btn(depressed icon)
        v-icon more_vert

  v-layout(v-show="hasApplied").buttons-bar.mt-2
    v-btn(depressed small) Got An Interview
    v-btn(depressed small).ml-1 Got Hired
    v-btn(depressed small).ml-1 Haven't heard
    div
      v-btn(depressed icon small).ml-1
        v-icon more_vert
      
v-card(hover v-if="job")
  v-card-title.card-title.headline.bold {{ job.role }}
  v-divider
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
@import '../../assets/styles/_vars.styl'

// TODO generalize
_about_height = 80px
.buttons-bar
  .btn
    margin 0
  .apply-btn
    margin 0 (16px * 0.5)
.btn-small
  text-transform capitalize
.about
  min-height 80px
  max-height 80px
  text-overflow ellpises
  overflow hidden
.bold
  font-weight bold
// TODO generalize
.italics
  font-style italic
</style>
