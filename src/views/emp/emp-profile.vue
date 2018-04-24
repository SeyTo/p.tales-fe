<script>
import EmpProfileBillBoard from '@/shared/components/emp-profile-billboard'

/**
 *
 */
export default {
  name: 'employer-profile',

  data: () => ({
    name: 'Github'
  }),

  components: {
    'emp-profile-billboard': EmpProfileBillBoard
  }
}
</script>

<template lang="pug">
div
  .img-jumbotron(style="background-image: url('/static/doc-images/mountain.jpg');background-size: cover; background-position-y: center")
    .name-container {{ name }}

  v-container(fluid)
    v-layout(wrap)
      emp-profile-billboard(:editable="true")
      v-flex.main-content.ml-3
        v-card
          v-tabs(
            v-model="active"
            grow
          )
            v-tab About Me
            v-tab Job Listings
            v-tab-item
              v-card
                | About Me
            v-tab-item
              v-card
                | Job Listings
      v-flex.blog.ml-3
        v-card
          | Blogs

</template>

<style lang="stylus" scoped>
// TODO generalize
_pad-3 = 16px
_pad-4 = (16 * 1.5)px
_pad-5 = (16 * 3)px
_profile_pic_width = 168px
_img_jumbotron_height = 300px

_name_container_height = 100px
_name_container_left = _pad-3 + _pad-5 + _profile_pic_width
_name_container_top = _img_jumbotron_height - _name_container_height

// padding of container + padding of billboard + profilepicwidth/2 + nameconainterheight/2
_billboard_translate = -(_pad-3 + _pad-5 + _profile_pic_width/2 + _name_container_height/2)px

.container
  padding _pad-3
.img-jumbotron
  position relative
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
  bottom 0
  left _name_container_left
.profile-board
  transform translateY(_billboard_translate)
.main-content
  max-width 600px
  .card
    min-height 164px 
.blog
  max-width 600px
@media all and (max-width: 500px)
  .profile-board 
    min-width 100% !important
    width 100% !important
  .name-container
    top _pad-4
    left _pad-4
    right _pad-4

</style>
