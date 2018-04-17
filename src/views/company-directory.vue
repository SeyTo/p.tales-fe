<script>
import EmpProfileBillBoard from '@/shared/components/emp-profile-billboard'

export default {
  name: 'company-directory',

  data () {
    return {
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
      height: 500
    }
  },

  computed: { },

  components: {
    'emp-profile-billboard': EmpProfileBillBoard
  }
}
</script>


<template lang="pug">
div
  // -- background image
  // TODO find alternative to this imaging
  .img-jumbotron(style="background-image: url('/static/doc-images/mountain.jpg'); background-size: cover; background-position-y: center")

  // -- name container
  .name-container Github

  v-container(fluid)
    v-layout
      emp-profile-billboard
      v-flex
        v-card
        v-tabs(
          v-model="active"
        )
          v-tab About Me
          v-tab Job Listings
          v-tab-item
            v-card
              | About Me
          v-tab-item
            v-card
              | Job Listings
      v-flex
        v-card
          | Blogs

</template>


<style lang="stylus" scoped>
// TODO generalize
_pad-3 = 16px
_pad-4 = (16 * 1.5)px
_pad-5 = (16 * 3)px
_profile_pic_width = 168px
_img_jumbotron_height = 400px

_name_container_height = 100px
_name_container_left = _pad-3 + _pad-5 + _profile_pic_width
_name_container_top = _img_jumbotron_height - _name_container_height

// padding of container + padding of billboard + profilepicwidth/2 + nameconainterheight/2
_billboard_translate = -(_pad-3 + _pad-5 + _profile_pic_width/2 + _name_container_height/2)px

.container
  padding _pad-3
.img-jumbotron
  width 100%
  height _img_jumbotron_height
.name-container
  position absolute
  height _name_container_height
  background-color rgba(0, 0, 0, 0.4)
  color white
  font-size 4rem
  font-weight lighter
  line-height _name_container_height
  padding 0 _name_container_height
  border-radius 50px
  top _name_container_top 
  left _name_container_left
.profile-board
  transform translateY(_billboard_translate)
</style>

