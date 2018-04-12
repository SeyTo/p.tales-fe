<script>
export default {
  name: 'stu-infocard-base',
  props: {
    'title': {
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
  div
    | {{ title }}
    v-btn(flat fab small) 
      v-icon add
  div
    | Test
  
</template>


<style lang="stylus">
</style>
