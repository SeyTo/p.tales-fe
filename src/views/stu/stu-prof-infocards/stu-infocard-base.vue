<script>
export default {
  name: 'stu-infocard-base',

  props: {
    'title': {
      default: ''
    },
    'nullText': {
      default: null
    },
    'slotActive': {
      default: false
    }
  },

  data () {
    return { }
  },

  computed: { }

}
</script>


<template lang="pug">
v-card
  div.header
    .title {{ title }}
    v-btn(
      depressed fab small 
      @click.native.stop="$emit('onAddClicked')").abs-right
      v-icon add
  hr
  .subheading.null-text(v-if="nullText !== null && slotActive === false").pa-4
    | {{ nullText }}
  slot(v-if="slotActive")
     
</template>


<style lang="stylus">
header-height = 56px
padding = 16px 8px
.header
  position relative
  text-align center
  padding padding
  .abs-right
    position absolute
    right 0
    top 0
.info-card-null-content
  text-align center
  padding padding * 2

</style>
