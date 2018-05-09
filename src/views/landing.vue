<script>
import StuLoggedoutNavBar from '../shared/components/navbars/stu-loggedout-navbar'
import StuLoggedoutNavDrawer from '../shared/components/navdrawers/stu-loggedout-navdraw'

export default {
  name: 'landing',

  data: () => ({
    linkDialogs: true
  }),

  components: {
    'stu-loggedout-navbar': StuLoggedoutNavBar,
    'stu-loggedout-navdrawer': StuLoggedoutNavDrawer
  }
}
</script>


<template lang="pug">
// TEMP content,
mixin links
  ul
    li: h3 Employer Pages
    li: router-link(:to="{ name: 'EmployerPostSignupQuery' }") Post Signup Query Page
    li: router-link(:to="{ name: 'EmployerLanding' }") Landing Page
    li: router-link(:to="{ name: 'EmployerProfile' }") Profile Page
    li: router-link(:to="{ name: 'EmployerSearch' }") Search Page
    li: router-link(:to="{ name: 'EmployerAnalytics' }") Analytics
    li: router-link(:to="{ name: 'EmployerCreateNew' }") Create New
    li: router-link(:to="{ name: 'EmployerListingsApplications' }") Listings Applications
    li: router-link(:to="{ name: 'EmployerListingsBookmarks' }") Listings Bookmarks
    li: router-link(:to="{ name: 'EmployerMessages' }") Messages
    li: router-link(:to="{ name: 'EmployerPrefs' }") Prefs

    li: h3 Student Pages
    li: router-link(:to="{ name: 'StuPostSignupQuery' }") Post Sign Up Query Page
    li: router-link(:to="{ name: 'StudentProfile' }") Profile
    li: router-link(:to="{ name: 'StudentJobsSearch' }") Job Search
    li: router-link(:to="{ name: 'StudentJobsApplications' }") Applications
    li: router-link(:to="{ name: 'StudentJobsBookmarks' }") Job > Bookmarks
    li: router-link(:to="{ name: 'StudentUserPrefs' }") Prefs
    li: router-link(:to="{ name: 'StudentMessages' }") Messages

    li: h3 Misc
    li: router-link(:to="{ name: 'CompanyDirectory' }") Company Directory

v-container(fluid column).pa-0
  stu-loggedout-navbar
  stu-loggedout-navdrawer

  v-fab-transition
    v-btn(
      fab
      fixed
      bottom
      left
      @click.native.stop="linkDialogs = true"
    )
      v-icon close
  v-dialog(v-model="linkDialogs" max-width="500")
    v-card.pa-5
      +links

  // TODO replace with vertical pagination
  div
    v-layout(align-center justify-center green).fill-va
      div.display-4
        | 1
    v-layout(align-center justify-center).fill-va
      div.display-4
        | 2
    v-layout(align-center justify-center blue).fill-va
      div.display-4
        | 3
</template>


<style lang="stylus" scoped>
</style>
