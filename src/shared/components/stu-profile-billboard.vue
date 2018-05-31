<script>
export default {
  name: 'stu-profile-billboard',

  props: [
    'name',
    'aboutme',
    'email',
    'address',
    'dob',
    'phonenumber',
    'favcolor'
  ],

  data () {
    return {

    }
  },

  methods: {
    onEdit () {
      this.$emit('edit')
    }
  },

  computed: { },

  components: { }
}
</script>


<template lang="pug">
v-card.profile-board
  // div.colored
  div.this(v-bind:style="{ 'background-color': favcolor }")
  div.picture-container.mt-5.mx-5.mb-4
    img(src="../../assets/svg/avatar.svg").profile-pic.pb-4
    .headline.name.thin {{ name }}
    v-layout(justify-center)
      .color-line(:style="{ backgroundColor: favcolor, width: (name.length * 14) + 'px' }").mt-2
  .user-info
    div.body-2 About Me
    div.body-1.thin {{ aboutme }}
  .user-info
    div.body-2 Email
    div.body-1.thin {{ email }}
  .user-info
    div.body-2 Phone Number
    div.body-1.thin {{ phonenumber }}
  .user-info
    div.body-2 Date of Birth
    div.body-1.thin {{ dob }}
  .user-info
    div.body-2 Address
    div.body-1.thin {{ address }}
  v-divider.mb-4
  v-layout(column).social-container.mx-5
    v-layout(wrap justify-center)
      v-btn(icon fab flat small)
        img(src="@/assets/svg/facebook.svg") 
      v-btn(icon fab flat small)
        img(src="@/assets/svg/twitter.svg") 
      v-btn(icon fab flat small)
        img(src="@/assets/svg/google.svg") 
      v-btn(icon fab flat small)
        img(src="@/assets/svg/github-logo.svg") 
      v-btn(icon fab flat small)
        img(src="@/assets/svg/linkedin.svg") 
  div.mb-3.mx-4.text-xs-right
    a(@click="onEdit") EDIT

</template>


<style lang="stylus" scoped>
// TODO generalize
_sm_size             = 600px
_padding              = (16)px
_padding-4            = (16 * 1.5)px
_padding-5            = (16 * 3)px
_profile_pic_width    = 168px
_min_width            = (_padding-5 * 2) + _profile_pic_width

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
  width _min_width
  .this
    // TODO calculate
    position absolute
    height _min_width * 1.5 
    width 166px 
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
      border-radius 50%
      align-self center
    .name
      text-align center
  .user-info
    padding 0 _padding-5 _padding _padding-5
  .social-container
    // padding-bottom _padding-4

@media screen and (max-width: _sm_size)
  .profile-board   
    width 100%


.thin
  font-weight 300
.color-line
  height 4px
  border-radius 25%
</style>
