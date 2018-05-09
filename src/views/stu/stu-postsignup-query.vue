<script>
import BaseNavBar from '@/shared/components/navbars/base-navbar'
import FormDuallist from '@/shared/components/dialog/form-duallist'
import FormProfilePic from '@/shared/components/dialog/form-profile-pic'

export default {
  name: 'student-post-loginquery',

  data () {
    return {
      currentPage: 0,
      page0: {
        firstName: '',
        lastName: '',
        location: '',
        selectedGender: null,
        genders: [ 'male', 'female' ],
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
    }
  },

  mounted () { },

  components: {
    'base-navbar': BaseNavBar,
    'form-duallist': FormDuallist,
    'form-profile-pic': FormProfilePic
  }
}
</script>


<template lang="pug">
div
  base-navbar(containerSize="true" noSlot="true")
  v-container

    // page0 content
    v-layout(column align-content-start v-show="currentPage == 0").app-flow-text
      v-flex(d-flex row).line
        .inline My name is

        v-flex(d-flex row)
          input(
            type="text"
            placeholder="first name"
            required
            v-model="page0.firstName"
            :size="page0.firstName.length - 2").med
          input(
            type="text"
            placeholder="last name"
            required
            v-model="page0.lastName"
            :size="page0.lastName.length - 2").med
          .inline .

      v-flex(d-flex row).line
        .inline-select I am a
        select
          option(value="gender" disabled selected) gender
          option(value="female") female
          option(value="male") male
        .inline-select .

      v-flex(d-flex row).line
        .inline I currently live in
        input(
          type="text"
          placeholder="location"
          required
          v-model="page0.location"
          @click="openFormDuallist('location')"
          :size="this.page0.location.length - 2"
          )
        .inline .

      v-flex(d-flex row align-center).line
        .inline My resume
        v-btn(color="info" @click.native.stop="").my-0 Upload Resume
        .inline .

      v-flex(d-flex row align-center).line
        .inline My profile photo
        v-btn(color="info" @click.native.stop="openProfilePicSelector").my-0 Upload Profile Photo
        .inline .

      v-flex(d-flex row).line
        .inline I completed
        input(
          type="text"
          placeholder="degree"
          v-model="page0.degree"
          :size="this.page0.degree.length - 2"
          ).med
        .inline in
        input(
          type="text"
          placeholder="major"
          v-model="page0.major"
          :size="this.page0.major.length"
          ).med
        .inline from
        input(
          type="text"
          placeholder="university"
          v-model="page0.university"
          :size="this.page0.university.length"
          ).med
        .inline .

      v-flex(d-flex row).line
        .inline I enrolled in
        input(
          type="text"
          placeholder="month"
          v-model="page0.enroll.month"
          :size="this.page0.enroll.month.length"
          ).short
        input(
          type="text"
          placeholder="year"
          v-model="page0.enroll.year"
          :size="this.page0.enroll.year.length"
          ).short
        .inline and graduated in
        input(
          type="text"
          placeholder="month"
          v-model="page0.graduate.month"
          :size="this.page0.graduate.month.length"
          ).short
        input(
          type="text"
          placeholder="year"
          v-model="page0.graduate.year"
          :size="this.page0.graduate.year.length"
          ).short
        .inline .

      v-layout(row)
        v-spacer
        v-btn(color="primary" @click.stop = "currentPage = 1") Next

    // page 1
    v-layout(column align-content-start v-show="currentPage == 1").app-flow-text

      v-flex(d-flex row).line
        .inline My recent work work experience was at
        input(
          type="text"
          placeholder="Organization Name"
          v-model="page1.workplaceName"
          :size="this.page1.workplace.name.length - 2"
          ).med
        .inline at location
        input(
          type="text"
          placeholder="Location"
          v-model="page1.location"
          :size="this.page1.workplace.location.length - 2"
          ).med
        .inline from
        input(
          type="text"
          placeholder="Year"
          v-model="page1.workplace.startyear"
          :size="this.page1.workplace.startyear.length - 2"
          ).short
        input(
          type="text"
          placeholder="Month"
          v-model="page1.workplace.startmonth"
          :size="this.page1.workplace.startmonth.length - 2"
          ).short
        .inline to
        input(
          type="text"
          placeholder="Year"
          v-model="page1.workplace.endyear"
          :size="this.page1.workplace.endyear.length - 2"
          ).short
        input(
          type="text"
          placeholder="Month"
          v-model="page1.workplace.endmonth"
          :size="this.page1.workplace.endmonth.length - 2"
          ).short
        .inline .

      v-flex(d-flex row).line
        .inline I have volunteered in
        input(
          type="text"
          placeholder="Organization Name"
          v-model="page1.volunteer.name"
          :size="this.page1.volunteer.name.length - 2"
          ).med
        .inline .

      v-flex(d-flex row).line
        .inline Fun fact about me is that
        input(
          type="text"
          placeholder="Organization Name"
          v-model="page1.volunteer.name"
          :size="this.page1.volunteer.name.length - 2"
          ).med
        .inline .

      v-flex(d-flex row).line
        .inline Im skilled in
        input(
          type="text"
          placeholder="Skills"
          v-model="page1.skills"
          ).med

      v-flex(d-flex row).line
        .inline I speak language such as
        input(
          type="text"
          placeholder="Languages"
          v-model="page1.languages"
          :size="this.page1.languages.length"
          ).med

      v-layout
        v-spacer
        v-btn(color="primary" @click.stop = "currentPage = 2") Next

    //- final page
    v-layout(row justify-center v-show="currentPage == 2").app-flow-text
      v-card.validation-card
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

  form-duallist(
    v-model="dualList.visible"
    :title="dualList.title"
    :list="dualList.list"
    :type="dualList.type"
    @onSelected="selectedFromList"
    )

  form-profile-pic(
    v-model="profilePicSelector.visible"
    )
</template>


<style lang="stylus" scoped>
@import '../../assets/styles/_text.styl'
@import '../../assets/styles/_vars.styl'

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
