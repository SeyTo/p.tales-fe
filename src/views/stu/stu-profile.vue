<script>
import StuInfocardBase from '@/shared/components/stu-infocards/stu-infocard-base'
import StuInfocardContentIcontext from '@/shared/components/stu-infocards/stu-infocard-content-icontext'
import StuProfileBoard from '@/shared/components/stu-profile-billboard'

export default {
  name: 'student-profile',

  data () {
    return {
      avatar: 'need absolute path/proper url, else wont load, cause webpack',
      favcolor: '#04a',
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
            },
            {
              component: StuInfocardContentIcontext,
              args: { title: 'Tribhuwan University', date: '2017-8-19' }
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
    }
  },

  mounted () { },

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
div
  // -- main content
  v-container
    v-layout(justify-center align-start).sm-col
      
      // -- profile bill board
      div.sm-full
        stu-profile-billboard(
          :name="name" 
          :aboutme="aboutme" 
          :email="email" 
          :address="address"
          :dob="dob"
          :phonenumber="phonenumber"
          :favcolor="favcolor"
        ).sm-full

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
              template(v-show="i.contents")
                template(v-for="part in i.contents")
                  component(
                      :is="part.component" 
                      :args="part.args"
                    )

</template>

<style lang="stylus">
// TODO generalize
_sm_size                    = 600px
_general-margin             = (16 * 1.5)px
_profile-pic                = (168)px
_board-padding              = 36px
_info-card-padding          = (16 * 1.5)px
_profile-board-padding      = (16 * 2)px
_card-max-width             = 384px
_profile-board-max-width    = _profile-pic + (_board-padding * 2)px
_full-width                 = _profile-board-max-width + (2 * _card-max-width) + 20px + (_general-margin * 4)
_card-container-full-width  = 2 * (_card-max-width) + (_general-margin * 2)

.info-card-container
  max-width _card-container-full-width
  min-width _card-container-full-width
.info-card
  max-width _card-max-width
  min-width _card-max-width

@media screen and (max-width: _sm_size)
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
