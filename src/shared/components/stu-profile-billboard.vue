<script>
export default {
  name: 'stu-profile-billboard',

  data () {
    return { }
  },

  computed: { },

  components: { }
}
</script>


<template lang="pug">
v-card.profile-board
  // div.colored
  div.this
  div.picture-container.mt-5.mx-5.mb-4
    img(src="../../assets/svg/avatar.svg").profile-pic
    .headline.name Rita Maharjan
  v-divider.mb-4
  .user-info
    div.subheading About Me
    div.body-2 Test
  .user-info
    div.subheading Email
    div.body-2 atleast 1
  .user-info
    div.subheading Phone Number
    div.body-2 +981 123124125
  v-divider.mb-4
  .user-info
    div.subheading Date of Birth
    div.body-2 Software
  .user-info
    div.subheading Location
    div.body-2 Internet
  .user-info
    div.subheading Founded
    div.body-2 1520 
  .user-info
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
// TODO generalize
_pair_col_full_width      = 600px
_padding = (16)px
_padding-4 = (16 * 1.5)px
_padding-5 = (16 * 3)px
_profile_pic_width = 168px
_min_width = (_padding-4 * 2) + _profile_pic_width

.centered
  display flex
  justify-content center
  flex-direction column
  
.profile-board
  position relative
  overflow hidden
  display flex
  flex-direction column
  justify-content center
  min-width _min_width
  .this
    // TODO calculate
    position absolute
    // height 300px
    height _min_width * 2
    width 166px 
    background-color #9b4
    top -145px
    left -36px
    z-index 1 
    transform rotate(45deg)
  .picture-container
    // TODO generalize
    overflow hidden
    position relative
    z-index 1
    display flex
    flex-direction column
    .profile-pic
      width _profile_pic_width
      // TODO generalize
      border-radius 50%
      align-self center
    .name
      text-align center
  .user-info
    padding 0 _padding-5 _padding _padding-5
  .social-container
    padding-bottom _padding-4
// TODO generalize
.self-center
  align-self center

@media screen and (max-width: _pair_col_full_width)
  //   
</style>
