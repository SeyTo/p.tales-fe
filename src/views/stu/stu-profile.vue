<script>
import StuInfocardBase from './stu-prof-infocards/stu-infocard-base.vue'
import StuInfocardContentIcontext from './stu-prof-infocards/stu-infocard-content-icontext'
import StuProfileBoard from '@/shared/components/stu-profile-billboard'

export default {
  name: 'student-profile',

  props: { },

  data: () => ({
    avatar: 'need absolute path/proper/context url, else wont load, cause webpack',
    name: '',
    favcolor: '#04a',
    aboutme: '',
    email: '',
    address: '',
    dob: '',
    phonenumber: '',
    infoCards: {
      'education': {
        'name': 'Education',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'workhistory': {
        'name': 'Work History',
        'nullText': 'List here the places you have worked before.'
      },
      'gigsfreelances': {
        'name': 'Gigs and Freelances',
        'nullText': 'List out some of your Gigs'
      },
      'skills': {
        'name': 'Skills',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'volunteers': {
        'name': 'Volunteers',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'leadership': {
        'name': 'Leadership',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'videos': {
        'name': 'Videos',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'newmodule': {
        'name': 'Add New Module',
        'nullText': 'List out some of your education, courses you took and certifications'
      }
    }
  }),

  created () {
    // TODO load profile data from interceptor/http
    let context = require.context('../../assets/svg', false, /\.svg$/)
    this.avatar = context('./' + 'avatar.svg')
    this.favcolor = '#04a'
    this.name = 'Jane Shepard'
    this.aboutme = 'I am Commander Shepard and I approve of this message.'
    this.email = 'jane.shepard@gmail.com'
    this.address = 'Normandy, SSR4'
    this.dob = '2017, 14th May'
    this.phonenumber = '+200 9158248424'
    this.infoCards = {
      'education': {
        'name': 'Education',
        'nullText': 'List out some of your education, courses you took and certifications',
        contents: [
          {
            component: StuInfocardContentIcontext,
            args: { title: 'Kathmandu University', date: '2017-8-19', level: 'Bachelors', subject: 'Business Arts' }
          },
          {
            component: StuInfocardContentIcontext,
            args: { title: 'Tribhuwan University', date: '2017-8-19', level: 'Masters', subject: 'Physics' }
          }
        ]
      },
      'workhistory': {
        'name': 'Work History',
        'nullText': 'List here the places you have worked before.'
      },
      'gigsfreelances': {
        'name': 'Gigs and Freelances',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'skills': {
        'name': 'Skills',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'volunteers': {
        'name': 'Volunteers',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'leadership': {
        'name': 'Leadership',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'videos': {
        'name': 'Videos',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'newmodule': {
        'name': 'Add New Module',
        'nullText': 'List out some of your education, courses you took and certifications'
      }
    }
  },

  beforeDestroy () { },

  methods: { },

  components: {
    'stu-infocard-base': StuInfocardBase,
    'stu-infocard-content-icontext': StuInfocardContentIcontext,
    'stu-profile-billboard': StuProfileBoard
  }

}
</script>


<template lang="pug">
// -- main content
v-container
  v-layout(justify-center align-start).xs-flex-col
    
    // -- profile bill board
    stu-profile-billboard(
      :name="name" 
      :aboutme="aboutme" 
      :email="email" 
      :address="address"
      :dob="dob"
      :phonenumber="phonenumber"
      :favcolor="favcolor"
    ).xs-full

    // -- info cards
    .info-card-container.xs-full.ml-3.mt-3
      div(
          v-masonry 
          transition-duration="0.3s" 
          item-selector=".item"
        )
        div(v-for="(i, index) in infoCards" :key="i.name")
          stu-infocard-base(
              v-masonry-tile 
              class="item" 
              :title="i.name" 
              :nullText="i.nullText" 
              :slotActive="i.contents"
            ).info-card.mb-3.mr-3.pb-3.xs-full
            template(v-show="i.contents")
              template(v-for="part in i.contents")
                component(
                    :is="part.component" 
                    :args="part.args"
                  ).mt-3.mx-3

</template>


<style lang="stylus">
@import '../../assets/styles/_vars.styl'

// helps calculate when to wrap
_full-width = t-sidebar-w + (2 * t-infocard-w) + 20px + (t-spacer4 * 4)
_card-container-full-width  = 2 * (t-infocard-w) + (t-spacer4 * 2)

.info-card-container
  max-width _card-container-full-width
  min-width _card-container-full-width
.info-card
  max-width t-infocard-w
  min-width t-infocard-w

@media $display-breakpoints.xs-only
  .container
    padding-left 0 !important
    padding-right 0 !important
  .ml-3
    margin-left 0 !important

@media screen and (max-width: (_full-width - 150px))
  // forces the info-card container items to wrap in a single column
  .info-card-container
    max-width t-infocard-w
    min-width t-infocard-w
</style>
