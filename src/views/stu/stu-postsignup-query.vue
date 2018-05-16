// TODO install use vue-swatches
//
<script>
import BaseNavBar from '@/shared/components/navbars/base-navbar'
import FormDuallist from '@/shared/components/dialog/form-duallist'
import FormProfilePic from '@/shared/components/dialog/form-profile-pic'
import BreadVert from '@/shared/components/bread-vert.vue'

export default {
  name: 'student-post-loginquery',

  data () {
    return {
      move: 0,
      currentPage: 0,
      favcolor: 'blue',
      page0: {
        firstName: '',
        lastName: '',
        location: '',
        selectedGender: null,
        genders: [ 'Male', 'Female' ],
        degree: '',
        major: '',
        university: '',
        enroll: {
          month: '',
          year: ''
        },
        graduate: {
          month: '',
          year: ''
        }
      },
      page1: {
        workplace: {
          name: '',
          location: '',
          startyear: '',
          startmonth: '',
          endyear: '',
          endmonth: ''
        },
        volunteer: {
          name: ''
        },
        skills: '',
        languages: ''
      },
      dualList: {
        title: 'Testst',
        visible: false,
        type: '',
        list: []
      },
      profilePicSelector: {
        visible: false
      }
    }
  },

  computed: { },

  methods: {
    openFormDuallist (type) {
      if (type === 'location') {
        this.dualList.visible = true
        this.dualList.title = 'Type a Location'
        this.dualList.list = [ 'Patan', 'Batan', 'Haratan', 'Samatan' ]
        this.dualList.type = type
      }
    },
    selectedFromList (val) {
      console.log(val)
      if (val.type === 'location') {
        this.page0.location = val.val
      }
    },
    openProfilePicSelector () {
      this.profilePicSelector.visible = true
    },
    next () {
      this.currentPage += 1
    },
    previous () {
      this.currentPage -= 1
    }
  },

  mounted () { },

  components: {
    'base-navbar': BaseNavBar,
    'form-duallist': FormDuallist,
    'form-profile-pic': FormProfilePic,
    'bread-vert': BreadVert
  }
}
</script>


<template lang="pug">

mixin profile-avatar-div
  div
    .profile-avatar-div
      v-layout(column justify-center align-center)
        img(src="@/assets/svg/avatar.svg").avatar.mb-3
        v-btn(v-bind:style="{ 'background-color': favcolor }").ma-0
        v-btn(
          block 
          color="primary"
        ) Upload Resume

mixin basic-info
  v-layout(column).ml-4
    v-text-field(
      type="text"
      label="First Name"
      required
      v-model="page0.firstName"
    )
    v-text-field(
      type="text"
      label="Last Name"
      required
      v-model="page0.lastName"
    )
    v-select(
      :items="page0.genders"
      v-model="page0.gender"
      required
      label="Gender"
    )
    v-text-field(
      type="text"
      label="Address"
      v-model="page0.location"
    )

mixin study-info
  v-layout(column).ml-4
    v-text-field(
      label="Latest Study Degree"
    )
    v-select(
      :items="['student', 'post-grad' ]"
      label="I am a"
    )
    v-layout
      v-text-field(
        label="Enroll Year"
        hint="or when you expect to enroll"
      )
      v-text-field(
        label="Enroll Month"
        hint="or when you expect to enroll"
      )
    v-layout
      v-text-field(
        label="Graduate Year"
        hint="or when you expect to graduate"
      )
      v-text-field(
        label="Graduate Month"
        hint="or when you expect to graduate"
      )

mixin work-info
  v-layout(column).ml-4
    v-text-field(
      label="Recent Work Experience at"
      hint="Organization name or 'Freelancing' for freelancing."
    )
    v-layout
      v-text-field(
        label="Start Year & Month"
      )
      v-text-field(
        label="End Year & Month"
      )
    v-text-field(
      label="Recent Volunteer Experience at"
      hint="Organization name"
    )
    v-layout
      v-text-field(
        label="Start Year & Month"
      )
      v-text-field(
        label="End Year & Month"
      )

mixin misc-info
  v-layout(column).ml-4
    v-text-field(
      label="A fun fact about you"
      hint="Have you tried a startup? or maybe lead a team."
    )
    v-text-field(
      label="Your hobbies"
    )
    v-text-field(
      label="Some of your technical and non-technical skills"
    )
    v-text-field(
      label="Languages you speak"
    )

mixin fill-o-meter
  v-layout.ml-4
    | Fill o meter

div
  base-navbar(:fluid="false" noSlot="true")
  v-container
    v-layout(column align-center).main-layout
      div(v-show="currentPage < 4").headline
        | hello, please fill out blah, blah,. All information are private blah blah
      v-card(v-show="currentPage < 4").pa-4.mt-4.main-card
        div.this(v-bind:style="{ 'background-color': favcolor }")
        v-layout.content-container
          +profile-avatar-div
          v-flex(xs7).form-container
            v-flex(v-show="currentPage == 0") 
              +basic-info
            v-flex(v-show="currentPage == 1") 
              +study-info
            v-flex(v-show="currentPage == 2") 
              +work-info
            v-flex(v-show="currentPage == 3") 
              +misc-info
          v-flex(xs3).fill-o-meter
            +fill-o-meter
        v-layout(justify-center)
          v-btn(fab depressed color="secondary" @click="previous" v-if="currentPage != 0") 
            v-icon arrow_back
          v-btn(fab depressed color="primary" @click="next") 
            v-icon check
            
      v-card.validation-card(v-show="currentPage == 4").app-flow-text
        v-container(fluid)
          v-layout(column)
            .display-2.text-xs-center.py-2 Almost There
            img(src="../../assets/svg/finish.svg" height="100").py-2
            v-flex.text-xs-center.py-2
              | Please verify your email sent to you at {{ email }}
            v-flex.text-xs-center.py-2
              | if you didnt receive any confirmation mail then please check your blah blah
            v-flex.text-xs-center.py-2
              | if you still dont see then blah blah
            v-flex.text-xs-center.py-2
              | OR
            v-layout(justify-center).py-2

              v-btn Verify Using Facebook

</template>


<style lang="stylus" scoped>
@import '../../assets/styles/_text.styl'
@import '../../assets/styles/_vars.styl'

.content-container
  height 80%
.main-layout
  min-height 428px
  width 100%
.main-card
  position relative
  overflow hidden
  height 100%
  width 100%
  max-width 724px
  .form-container
    max-height 320px
    overflow auto
.headline
  max-width 700px
  text-align center
.this
  position absolute
  height 300px * 1.5 
  width 200px 
  top -225px
  left -36px
  z-index 1 
  transform rotate(45deg) 

.profile-avatar-div
  overflow hidden
  position relative
  .avatar
    border-radius 50%
    background-color white
    z-index 5
    width t-avatar-lg

inline-padding-left=6px

.med
  max-width 200px
.short
  max-width 100px
.inline
  padding-left inline-padding-left
.inline-select
  padding-left inline-padding-left
.line
  flex-wrap wrap !important
  margin t-spacer 0
  > *
    flex 0 0 auto !important
  white-space nowrap
input[type="text"]
  @extend .app-flow-text
  margin-left 5px

.validation-card
  max-width 600px
  min-width 600px

@media screen and (max-width: 500px)
  .med
    max-width 45%
  .short
    max-width 25%
</style>
