<script>
export default {
  name: 'bread-vert',

  props: [ 'height' ],

  data: () => ({
    position: 0
  }),

  computed: { },

  components: { }
}
</script>


<template lang="pug">
div.breadcrumb-div
  div.path
    .path-end
    .path-item
    .path-end
    .path-item
    .path-end
    .path-item
    .path-end
  div.ball(v-bind:style="{ 'transform': 'translateY(' + move + 'px)' }")
</template>


<style lang="stylus" scoped>
.breadcrumb-div
  width 40px
  .ball
    background-color #5f7
    height 20px
    width 20px
    position absolute
    border-radius 50%
    margin auto
    left 0
    top 26px
    right 0
    transition all 2s
    box-shadow 0px 2px 2px #aaa
    transform translateY(0px)
  .path
    position absolute
    top 0
    left 0 
    right 0
    margin auto
    width 100%
    height 100%
    display flex
    flex-direction column
    justify-content center
    .path-item 
      background-color #778
      width 4px
      height 22%
      align-self center
    .path-end
      border-radius 50%
      height 32px
      width 32px 
      align-self center
      border 2px solid #888
      
    //
</style>
