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
  v-layout(align-center)
    .title.pl-3.thin {{ title }}
    v-spacer
    v-btn(
      depressed fab small 
      @click.native.stop="$emit('onAddClicked')").abs-right
      v-icon add
  v-divider
  // TODO is not reactive when all items are removed
  div(@click="$emit('onAddClicked')").subheading.grey--text.null-text(v-if="nullText !== null && slotActive === false").pa-4
    | {{ nullText }}
  slot(v-if="slotActive")
     
</template>


<style lang="stylus" scoped>
@import '../../../assets/styles/_vars.styl'
@import '../../../../node_modules/vuetify/src/stylus/settings/_elevations.styl'

header-height = 56px
padding = 16px 8px
    
.card
  transition: all .4s cubic-bezier(.25, .8, .25, 1)
  &:hover
    transition-property: box-shadow
    elevation(8)
    
.header
  position relative
  padding padding
  .abs-right
    position absolute
    right 0
    top 0
.info-card-null-content
  text-align center
  padding padding * 2

</style>
