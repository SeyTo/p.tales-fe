<script>
import StuNavbarLogged from '../shared/components/navbar-slots/stu-navbar-logged'
import TalesNavBar from '../shared/components/tales-navbar'
import TalesNavDrawer from '../shared/components/tales-navdrawer'
import StuInfocardBase from '../shared/components/stu-infocards/stu-infocard-base'
import StuInfocardContentIcontext from '../shared/components/stu-infocards/stu-infocard-content-icontext'

export default {
  name: 'student-profile',

  data () {
    return {
      avatar: 'need absolute path/proper url, else wont load, cause webpack',
      name: 'Jane Shepard',
      aboutme: 'I am Commander Shepard and I approve of this message.',
      email: 'jane.shepard@gmail.com',
      address: 'Normandy, SSR4',
      dob: '2017, 14th May',
      phonenumber: '+200 9158248424',
      infoCards: {
        'education': {
          'name': 'Education',
          'nullText': 'List out some of your education, courses you took and certifications',
          contents: [
            {
              component: StuInfocardContentIcontext,
              args: { title: 'Kathmandu University', date: '2017-8-19' }
            }
          ]
        },
        'workhistory': {
          'name': 'Work History',
          'nullText': 'List out some of your education, courses you took and certifications'
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
    }
  },

  mounted () { },

  beforeDestroy () { },

  methods: { },

  components: {
    'tales-navbar': TalesNavBar,
    'tales-navdrawer': TalesNavDrawer,
    'stu-navbar-logged': StuNavbarLogged,
    'stu-infocard-base': StuInfocardBase,
    'stu-infocard-content-icontext': StuInfocardContentIcontext
  }

}
</script>


<template lang="pug">
div
  tales-navbar
    stu-navbar-logged
  
  tales-navdrawer
    stu-navbar-logged(compactView="true")

  // main content
  v-container
    v-layout(justify-center align-start).sm-col
      
      // profile bill board
      // TODO change to masonry layout
      // TODO move to separate component
      v-flex(d-flex).profile-board.sm-full
        v-card.profile-board-pad
          v-layout(column)

            // top half contains avatar, name & about
            v-layout(justify-center column).sm-row
              // avatar container
              v-flex(d-flex)
                v-flex(d-flex justify-center pb-2)
                  v-avatar(:tile="false" :size=168)
                    img(src="../assets/svg/avatar.svg")
              // name & about me container
              v-flex(d-flex)
                v-layout(column)
                  h2.text-sm-center {{ name }}
                  hr
                  p.text-sm-justify {{ aboutme }}

            // bottom half contains other details
            v-layout(justify-center column).sm-row
              v-flex
                div Email
                div {{ email }}
              v-flex
                div Address
                div {{ address }}
            v-layout(justify-center column).sm-row
              v-flex
                div Phone Number
                div {{ phonenumber }}
              v-flex
                div Date of Birth
                div {{ dob }} 
            v-layout(column)
              v-flex.self-center
                v-btn(icon fab small flat)
                  img(src="../assets/svg/facebook.svg" height="36") 
                v-btn(icon fab small flat)
                  img(src="../assets/svg/twitter.svg" height="36") 

      // -- info cards
      div.info-card-container.sm-full.ml-3.mt-3
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
              ).info-card.mb-3.mr-3
              template(v-if="i.contents")
                div
                  component(:is="i.contents[0].component" :args="i.contents[0].args")
                  component(:is="i.contents[0].component" :args="i.contents[0].args")

</template>

<style lang="stylus">
_general-margin             = (16 * 1.5)px
_profile-pic                = (168)px
_board-padding              = 36px
_info-card-padding          = (16 * 1.5)px
_profile-board-padding      = (16 * 2)px
_card-max-width             = 384px
_profile-board-max-width    = _profile-pic + (_board-padding * 2)px
_full-width                 = _profile-board-max-width + (2 * _card-max-width) + 20px + (_general-margin * 4)
_card-container-full-width  = 2 * (_card-max-width) + (_general-margin * 2)

.at-width
  max-width _profile-board-max-width
  max-width _profile-board-max-width
.profile-board
  max-width _profile-board-max-width 
  min-width _profile-board-max-width
.info-card-container
  max-width _card-container-full-width
  min-width _card-container-full-width
.info-card
  max-width _card-max-width
  min-width _card-max-width
.profile-board-pad
  padding _profile-board-padding
.self-center
  align-self center

@media screen and (max-width: 600px)
  // when screen small, do
  .sm-row
    flex-direction row !important
  .sm-col
    flex-direction column !important
  .sm-full
    min-width 100% !important
    max-width 100% !important
  .info-card
    // occupy its parent
    @extend .sm-full
  // profile padding
  .profile-board-pad
    padding _profile-board-padding
  .container
    padding-left 0 !important
    padding-right 0 !important
  .ml-3
    margin-left 0 !important

@media screen and (min-width: 450px)
  .md-row
    flex-direction row

@media screen and (max-width: (_full-width - 150px))
  .info-card-container
    max-width _card-max-width
    min-width _card-max-width
</style>
