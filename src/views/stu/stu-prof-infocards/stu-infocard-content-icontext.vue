<script>
export default {
  name: 'stu-infocard-content-icontext',

  props: [ 'args' ],

  data () {
    return { }
  }
}
</script>

//TODO rename this
<template lang="pug">
  v-layout.clickable
    v-flex
      v-avatar(:tile="true" :size="56").mx-3.h-100
        img(src="@/assets/svg/archive.svg")
      v-flex(column)
        h4 {{ args.title }}
        div.pl-3.body-1.grey--text
          div {{ args.item1 }}
          div {{ args.item2 }}
          div {{ args.item3 }}
</template>


<style lang="stylus" scoped>
.flex
  display flex
.column
  flex-direction column
// TODO generalize
.h-100
  height 100% !important
</style>
