<script>
import JobDescCardMin from '@/shared/components/job-desc-card-min'
import EmpProfileBillBoard from '@/shared/components/emp-profile-billboard'

export default {
  name: 'employer-profile',

  data: () => ({
    name: 'Github',
    activetab: ''
  }),

  components: {
    'emp-profile-billboard': EmpProfileBillBoard,
    'job-desc-card-min': JobDescCardMin
  },

  created () {
    // TODO get from interceptor/http/store/service
    this.name = 'Github'
  }
}
</script>


<template lang="pug">
v-container(fluid).pa-0
  // -- background image
  v-jumbotron(src="/static/doc-images/mountain.jpg")
    v-container(fill-height)
      v-layout(align-center)
        // -- name container
        .name-container Github
        v-flex(text-xs-center)
          // text overlay on cover image

  v-container(fluid)
    v-layout(wrap)
      emp-profile-billboard(:editable="true")
      // -- tab container
      v-layout(wrap align-content-start)
        // -- about & job listings
        v-flex(xs12 sm12 md7)
          v-card
            v-tabs(v-model="activetab" grow)
              v-tab About Us
              v-tab Job Listings
              v-tab-item
                v-card.pa-3.body-1
                  | test
              v-tab-item
                v-card(v-for="i in 3" :key="i")
                  job-desc-card-min
                  v-divider
        // -- articles
        v-flex(xs12 sm12 md5)
          v-card
            v-card-title Blogs & Articles
            v-card-text Testing

</template>

<style lang="stylus" scoped>
@import '../../assets/styles/_vars.styl'

_name_container_height = 100px
_name_container_left = t-spacer1 + t-spacer5 + t-avatar-lg
_name_container_top = t-img-jumbo-lg-h - _name_container_height

_billboard_translate = -(t-spacer3 + t-spacer5 + t-avatar-lg/2 + _name_container_height/2)px

.name-container
  position absolute
  background-color t-bg-translucent
  color white
  font-size 4rem
  font-weight lighter
  line-height _name_container_height
  padding 0 _name_container_height
  border-radius 50px
  bottom 0
  left _name_container_left
  transition all 2s
  text-align center

.profile-board
  transform translateY(_billboard_translate)
  transition all 1s

@media $display-breakpoints.xs-only
  // TODO move full width to profile-board
  .profile-board 
    min-width 100% !important
    width 100% !important
    transform translateY(-10px)
  .name-container
    left t-spacer4 
    right t-spacer4 
</style>
