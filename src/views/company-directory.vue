<script>

export default {
  name: 'company-directory',

  data () {
    return {
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
      height: 500
    }
  },

  computed: { },

  components: { }
}
</script>


<template lang="pug">
div
  // -- background image
  .img-jumbotron(style="background-image: url('/static/doc-images/mountain.jpg')")

  // -- name container
  .name-container Github
  v-container(fluid)
    v-layout
      v-flex
        v-card
          | Profile Bill Board
      v-flex
        v-card
          | About Me
      v-flex
        v-card
          | Blogs

</template>


<style lang="stylus" scoped>
_img_jumbotron_height = 400px
.img-jumbotron
  width 100%
  height _img_jumbotron_height
  background-repeat no-repeat
  backgroud-size cover
  backgroud-position-y center
.name-container
  _height = 100px
  position absolute
  height _height
  background-color rgba(0, 0, 0, 0.4)
  color white
  font-size 4rem
  font-weight lighter
  line-height _height
  padding 0 _height
  border-radius 50px
  top _img_jumbotron_height - _height
</style>

