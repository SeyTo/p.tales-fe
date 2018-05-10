<script>
export default {
  name: 'stu-infocard-content-chips',

  props: [ 'args' ],

  data: () => ({ }),

  computed: { },

  components: { }
}
</script>


<template lang="pug">
v-layout
  v-flex
    h4 {{ args.title }} 
    v-layout(row wrap)
      v-chip(v-for="i in args.data" :key="i" :color="args.color")
        .body-2.white--text {{ i }}
</template>


<style lang="stylus" scoped>
.chip
  // height 26px
</style>
