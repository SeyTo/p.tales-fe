<script>
import StuNavbarLogged from '../shared/components/navbar-slots/stu-navbar-logged'
import TalesNavBar from '../shared/components/tales-navbar'
import TalesNavDrawer from '../shared/components/tales-navdrawer'
import StuInfocardBase from '../shared/components/stu-infocards/stu-infocard-base'

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
        'Education': { },
        'Work History': { },
        'Gigs and Freelances': { },
        'Skills': { },
        'Volunteers': { },
        'Leadership': { },
        'Videos': { },
        'Add New Module': { }
      }
    }
  },

  mounted () { },

  beforeDestroy () { },

  methods: {
    getInfoCards (isOdd = false) {
      let cards = []
      let index = 0
      let remainder = (isOdd ? 1 : 0)
      for (let i in this.infoCards) {
        if (index % 2 === remainder) cards.push(i)
        ++index
      }
      return cards
    }
  },

  components: {
    'tales-navbar': TalesNavBar,
    'tales-navdrawer': TalesNavDrawer,
    'stu-navbar-logged': StuNavbarLogged,
    'stu-infocard-base': StuInfocardBase
  }

}
</script>

<template lang="pug">
div
  tales-navbar
    stu-navbar-logged
  
  tales-navdrawer
    stu-navbar-logged(compactView="true")

  v-container(container)
    v-layout(justify-center).sm-col
      
      // profile bill board
      v-flex(d-flex).profile-board.sm-full.general-margin
        v-card.profile-board-pad
          v-layout(column)

            // top half contains avatar, name & about
            v-layout(justify-center column).sm-row
              // avatar container
              v-flex(d-flex)
                v-flex(d-flex justify-center pb-2)
                  v-avatar(:tile="false" :size=168)
                    img(src="../assets/svg/avatar.svg")
              // name container
              v-flex(d-flex)
                v-layout(column)
                  h2.text-sm-center {{ name }}
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
            v-layout(justify-center column)
              v-flex
                img(src="../assets/svg/facebook.svg" height="36") 
                img(src="../assets/svg/twitter.svg" height="36") 

      // info cards
      v-flex(d-flex).info-card-container.sm-full
        v-layout(wrap align-content-start).info-card-layout
          v-flex(d-flex).info-card.general-margin
            v-layout(column)
              v-flex(v-for="i in getInfoCards()" :key="i").general-margin-bottom
                stu-infocard-base(:title="i")

          v-flex(d-flex).info-card.general-margin
            v-layout(column)
              v-flex(v-for="i in getInfoCards(true)" :key="i").general-margin-bottom
                stu-infocard-base(:title="i")

  </template>

<style lang="stylus">
_general-margin             = (16 * 1.5)px
_profile-pic                = (168)px
_board-padding              = 36px
_info-card-padding          = (16 * 1.5)px
_profile-board-padding      = (16 * 2)px
_card-max-width             = 322px
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
// common margin for all cards
.general-margin
  margin-left _general-margin
.general-margin-bottom
  margin-bottom _general-margin
// margin for the right most elements
.general-margin-edge
  margin-right _general-margin
  @extend .general-margin-bottom

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
  .profile-board-pad
    // profile padding
    padding _profile-board-padding
  .container
    padding-left 0 !important
    padding-right 0 !important
  .general-margin
    margin-left 0

@media screen and (min-width: 450px)
  .md-row
    flex-direction row

@media screen and (max-width: (_full-width))
  .info-card-layout
    flex-direction column
  .info-card-container
    max-width _card-max-width
    // max-width _card-max-width + (_general-margin * 2)
    min-width _card-max-width
    // min-width _card-max-width + (_general-margin * 2)
</style>
