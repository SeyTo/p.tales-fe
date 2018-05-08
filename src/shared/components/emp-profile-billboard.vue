<script>
export default {
  name: 'emp-profile-billboard',

  props: [ 'editable' ],

  data () {
    return { }
  },

  computed: { },

  components: { }
}
</script>


<template lang="pug">
v-card.profile-board
  .abs-container
    .name-container Github
  div.centered
    img(src="../../assets/svg/github-logo.svg").profile-pic
  v-divider.mb-4
  .contact-info
    div.subheading Location 
    div.body-2 Somewhere in middle
  .contact-info
    div.subheading Company Size
    div.body-2 atleast 1
  .contact-info
    div.subheading Contact Information
    div.body-2 Phone: +981 123124125
  v-divider.mb-4
  .contact-info
    div.subheading Type
    div.body-2 Software
  .contact-info
    div.subheading Industry
    div.body-2 Internet
  .contact-info
    div.subheading Founded
    div.body-2 1520 
  .contact-info
    div.subheading Website 
    div.body-2 www.github.com 
  v-divider.mb-4
  v-layout(column).social-container
    v-flex.self-center
      v-btn(icon fab flat)
        img(src="@/assets/svg/facebook.svg") 
      v-btn(icon fab flat)
        img(src="@/assets/svg/twitter.svg") 
  div.mb-3.mx-5.text-xs-right
    | EDIT


</template>


<style lang="stylus" scoped>
@import '../../assets/styles/_vars.styl'
// TODO generalize
_padding = (16)px
_padding-4 = (16 * 1.5)px
_padding-5 = (16 * 3)px
_profile_pic_width = 168px
_min_width = (_padding-4 * 2) + _profile_pic_width
_max_width = (_padding-5 * 2) + _profile_pic_width

.centered
  display flex
  justify-content center
.profile-board
  position relative
  display flex
  flex-direction column
  justify-content center
  min-width _max_width
  max-width _max_width
  .profile-pic
    margin _padding-5
    width _profile_pic_width
    // TODO generalize
    border-radius 50%
    box-shadow 0px 2px 2px #ccc
  .contact-info
    padding 0 _padding-5 _padding _padding-5
  .social-container
    padding-bottom _padding-4
// TODO generalize
.self-center
  align-self center

// _name_container_right = -(t-spacer5 + t-avatar-lg)
_name_container_right = _min_width + t-spacer5
_name_container_height = 100px
_name_container_top = (t-avatar-lg)/2 + 4px
_billboard_translate_xs = -130px

.abs-container
  position absolute 
  top _name_container_top
  left _name_container_right
  z-index 2
.name-container
  background-color t-bg-translucent
  color white
  font-size 4rem
  font-weight lighter
  line-height _name_container_height
  padding 10px 40px 0 30px
  border-radius 0px 50px 50px 0px
  // border-radius 50px
  transition all 2s
  text-align center

@media $display-breakpoints.xs-only
  .abs-container
    left t-spacer4 
    right t-spacer4 
    top -130px
  .name-container
    border-radius 50px
    
  
</style>
