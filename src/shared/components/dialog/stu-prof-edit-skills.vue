<script>
/**
 * Dialog for skills editing in student profile view.
 */
export default {
  name: 'stu-prof-edit-skills',

  props: {
    'value': Boolean,
    'preData': Boolean,
    'data': Object
  },

  data: () => ({ }),

  computed: { },

  methods: { },

  components: { },

  mounted () { }

}
</script>


<template lang="pug">
v-dialog(lazy :value="value" @input="$emit('input', $event)")
  v-card
    v-card-title.headline.justify-center
      | Education
      v-btn(depressed fab icon small).close.mr-2.mt-2
        v-icon close
    v-divider
    v-layout(column).pa-4
      v-text-field(label="Technical Skills" hide-details)
      v-text-field(label="Skills" hide-details)
      v-text-field(label="Languages" hide-details)
</template>


<style lang="stylus" scoped>
.card__title
  position relative
  text-align center
  .close
    position absolute
    right 0
    top 0
</style>
