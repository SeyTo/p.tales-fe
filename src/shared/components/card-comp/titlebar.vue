<script>
export default {
  name: 'titlebar',

  props: [ 'title' ],

  data: () => ({ }),

  computed: { },

  components: { }
}
</script>


<template lang="pug">
v-card-title.headline
  v-layout(align-center).pa-0
    | {{ title }}
    v-spacer
    v-btn(depressed fab icon small @click="$emit('close')").ma-0
      v-icon close
</template>


<style lang="stylus" scoped>
</style>
