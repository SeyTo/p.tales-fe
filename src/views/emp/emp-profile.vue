<script>
import JobDescCardMin from '@/shared/components/job-desc-card-min'
import EmpProfileBillBoard from '@/shared/components/emp-profile-billboard'

export default {
  name: 'employer-profile',

  data: () => ({
    profile: {
      name: 'Github'
    },
    activetab: '',
    aboutUs: 'Odio morbi quis commodo odio aenean sed adipiscing diam. Consectetur lorem donec massa sapien faucibus et molestie. Ut eu sem integer vitae justo. Dignissim cras tincidunt lobortis feugiat vivamus at. Id ornare arcu odio ut sem nulla pharetra. Massa sapien faucibus et molestie ac feugiat sed lectus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Tortor pretium viverra suspendisse potenti nullam ac. Mattis molestie a iaculis at. Donec ac odio tempor orci dapibus ultrices in. Vel orci porta non pulvinar neque laoreet suspendisse. Enim sit amet venenatis urna cursus.',
    jobslist: [
      { 'test': 1 },
      { 'test2': 2 }
    ],
    eventslist: [
      { 'test': 1 },
      { 'test2': 2 }
    ],
    articleslist: [
      { 'test': 1 },
      { 'test2': 2 }
    ]
  }),

  components: {
    'emp-profile-billboard': EmpProfileBillBoard,
    'job-desc-card-min': JobDescCardMin
  },

  created () {
    // TODO get from interceptor/http/store/service
    this.profile.name = 'Github'
  }
}
</script>


<template lang="pug">
mixin aboutUs
  v-card#about-us
    v-card-title.headline About Us
    v-divider
    v-card-text
      | {{ aboutUs }}

mixin jobListings
  v-card#job-listing.mt-3
    v-card-title.headline Job Listings
    v-divider
    v-card-text
      div(v-for="i in jobslist").test-card
        | Something
      div(v-show="jobslist.length === 0")
        .subheading.text-xs-center.bold No new jobs
        div.text-xs-center 
          v-btn(small depressed) Follow
          | {{ profile.name }} to get notified about new job posts.

mixin articlesListings
  v-card#articles
    v-card-title.headline Articles By {{ profile.name }}
    v-divider
    v-list(three-line)
      template(v-for="i in articleslist")
        v-list-tile(avatar ripple)
          v-list-tile-avatar
            img(src="@/assets/svg/blogger.svg")
          v-list-tile-content
            v-list-tile-title This is a loong header
            v-list-tile-sub-title.subtitle This is an articlees content. I dont really know what to write
        v-divider

      // if nothing to show then
      div(v-show="articleslist.length === 0")
        .subheading.text-xs-center.bold No new jobs
        div.text-xs-center 
          v-btn(small depressed) Follow
          | {{ profile.name }} to get notified about events and news.

mixin eventListings
  v-card#events.mt-3
    v-card-title.headline Events & News
    v-divider
    v-list(three-line)
      template(v-for="i in eventslist")
        v-list-tile(avatar ripple)
          v-list-tile-avatar
            img(src="../../assets/svg/education.svg")
          v-list-tile-content
            v-list-tile-title Header
            v-list-tile-content Content            
        v-divider

      // if nothing to show then
      div(v-show="eventslist.length === 0")
        .subheading.text-xs-center.bold No new jobs
        div.text-xs-center 
          v-btn(small depressed) Follow
          | {{ profile.name }} to get notified about events and news.

// start
v-container(fluid).pa-0
  // -- background image
  v-jumbotron(src="/static/doc-images/mountain.jpg")
    v-container(fill-height)
      v-layout(align-center)
        // -- name container
        //-.name-container Github
        v-flex(text-xs-center)
          // text overlay on cover image

  v-layout(justify-center fluid)
    emp-profile-billboard(:editable="true")
      // -- tab container
    v-layout(wrap).ml-3.mt-3.translate.m-adjust-sm
      div(column).mid-list
        +aboutUs
        +jobListings
        +eventListings

      div(sm5).ml-3.mt-3.m-adjust-sm.translate.right-list
        +articlesListings

</template>

<style lang="stylus" scoped>
@import '../../assets/styles/_vars.styl'

.mid-list
  max-width 500px
.right-list
  max-width 400px

@media $display-breakpoints.md-and-down
  .right-list
    min-width 500px
    margin-left 0 !important
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
    width 100%
    margin 16px
    transform translateY(_billboard_translate + 100px)
  .translate
    transform translateY(_billboard_translate + 100px)
  .m-adjust-sm
    margin-left 0 !important

  // .name-container
  //   left t-spacer4 
  //   right t-spacer4 

.bold
  font-weight bold

.test-card
  min-height 50px
  border-top solid 1px
.art-avatar
  width 80px 
#about-us
  .card__text
    max-height 50%
// #job-listing
//   //
// #events
//   //
#articles
  max-width 500px
  .article
    height 100px
</style>
