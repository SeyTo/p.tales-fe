<script>
export default {
  name: 'stu-infocard-base',
  props: {
    'title': {
      default: ''
    },
    'nullText': {
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>


<template lang="pug">
v-card
  div.header
    h3 {{ title }}
    v-btn(flat fab small).abs-right
      v-icon add
  hr
  div.info-card-content
    | {{ nullText }}
  
</template>


<style lang="stylus">
header-height = 48px
.header
  position relative
  text-align center
  height header-height 
  line-height header-height
.abs-right
  position absolute
  right 0
  top 0
.info-card-content
  text-align center
  min-height 2 * header-height


</style>
