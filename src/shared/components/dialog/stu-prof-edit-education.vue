<script>
/**
 * Dialog for education editing in student profile view.
 */
export default {
  name: 'stu-prof-edit-edu',

  props: { 'value': Boolean },

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
    v-layout.pa-4
      img(src="../../../assets/svg/favicon.svg" height="96")
      v-flex.ml-4
        v-text-field(label="School/University Name" hide-details)
        v-layout
          v-text-field(label="Enroll Date*" hide-details)
          v-text-field(label="Graduation Date" hide-details).ml-3
        v-text-field(label="Major" hide-details)
        v-text-field(label="Level" hide-details)
    v-layout
      v-spacer
      v-btn(flat) Create
      
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
