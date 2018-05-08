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
v-container(fluid).pa-0
  // -- background image
  v-jumbotron(src="/static/doc-images/mountain.jpg")
    v-container(fill-height)
      v-layout(align-center)
        // -- name container
        .name-container Github
        v-flex(text-xs-center)
          // text overlay on cover image

  v-layout(wrap justify-center align-start)
    emp-profile-billboard(:editable="true")
    // -- tab container
    v-flex(lg4 sm5)
      v-card#about-us
        v-card-title.headline About Us
        v-divider
        v-card-text
          | {{ aboutUs }}
      v-card#job-listing
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
      v-card#events
        v-card-title.headline Events & News
        v-divider
        v-card-text
          div(v-for="i in eventslist").test-card
            | Something
          div(v-show="eventslist.length === 0")
            .subheading.text-xs-center.bold No new jobs
            div.text-xs-center 
              v-btn(small depressed) Follow
              | {{ profile.name }} to get notified about events and news.

    v-flex(sm3)
      v-card#articles
        v-card-title.headline Articles By {{ profile.name }}
        v-divider
        v-card-text
          div(v-for="i in articleslist").test-card
            | Something
          div(v-show="articleslist.length === 0")
            .subheading.text-xs-center.bold No new jobs
            div.text-xs-center 
              v-btn(small depressed) Follow
              | {{ profile.name }} to get notified about events and news.
       
      
    //-v-layout(wrap align-content-start)
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
      //- v-flex(xs12 sm12 md5)
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

.bold
  font-weight bold

.test-card
  min-height 50px
  border-bottom solid 2px
#about-us
  .card__text
    max-height 50%
#job-listing
  //
#events
  //
</style>
