<script>
export default {
  name: 'stu-infocard-content-icontext',

  props: [ 'args' ],

  data () {
    return { }
  }
}
</script>


<template lang="pug">
  v-layout
    v-flex(d-flex).pa-3
      v-avatar(:tile="true" :size="56")
        img(src="../../../assets/svg/archive.svg")
      v-flex(column)
        h4 {{ args.title }}
        div {{ args.date }}
</template>


<style lang="stylus">
.flex
  display flex
.column
  flex-direction column
</style>
