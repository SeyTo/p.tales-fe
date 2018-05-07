<script>
export default {
  props: {
    value: Boolean
  },

  data: () => ({
    favcolor: 'blue',
    styleO: {
      backgroundColor: 'red',
      color: 'yellow'
    }
  }),

  methods: {
    selectColor () { }
  }
}
</script>

<template lang="pug">
v-dialog(lazy :value="value" @input="$emit('input', $event)")
  v-card.pa-3.this-container
    div.this(v-bind:style="{ 'background-color': 'green' }")
    div.picture-container.mt-5.mx-5.mb-4
      img(src="../../../assets/svg/avatar.svg").profile-pic.pb-4
    div(@click="selectColor").color
      | test

</template>

<style lang="stylus" scoped>
_min_width = 200px
.background
  background-color green
.color
  min-width 50px
  max-width 50px
  max-height 50px
  min-height 50px
.profile-pic
  border-radius 50%
  max-height 200px
.this-container
  position relative
  overflow hidden
  .this
    position absolute
    height _min_width * 1.5
    width 166px
    top -125px
    left -36px
    z-index 1
    transform rotate(45deg)
.over
  z-index 3
</style>

