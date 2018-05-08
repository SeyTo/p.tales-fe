<script>
export default {
  name: 'stu-prefs',

  data: () => ({
    valid: false,
    jobPrefs: {
      jobNotifDays: 'None',
      jobNotifDaysItems: [ 'None', '2 days', '7 days', '10 days' ]
    }
  }),

  methods: { }

}
</script>


<template lang="pug">
mixin jobprefs
  v-flex(xs12).display-1 Job Preferences
  v-flex(xs12).header.text-xs-left
    | Select jobs you want to hear most about
  v-flex(xs12).job-pref-selector
    v-layout(wrap).pa-3
      v-flex
        v-checkbox(hide-details :label="'Creative'")
      v-flex
        v-checkbox(hide-details :label="'Office & Operations'")
      v-flex
        v-checkbox(hide-details :label="'Outdoor & Physical'")
      v-flex
        v-checkbox(hide-details :label="'Sales & Marketing'")
      v-flex
        v-checkbox(hide-details :label="'Product Engineering'")
      
  div.header.mt-3
    v-layout
      div(v-text="'I want to receive personlized job notifications every '").line-height-match
      v-select(
        dense 
        v-model="jobPrefs.jobNotifDays" 
        :items="jobPrefs.jobNotifDaysItems"
        hide-details
      ).small-width.pa-0.ml-2

mixin privacy
  v-flex(xs12).display-1 Privacy
  v-flex(column)
    v-checkbox(hide-details :label="'Make my profile publicly searchable'")
    v-checkbox(hide-details :label="'Let businesses find me'")

mixin password
  v-flex(xs12).display-1 Password
  a Change Password

mixin other
  v-flex(xs12).display-1 Misc
  v-flex(column)
    v-checkbox(hide-details :label="'Receive Tales news and other updates.'")
    v-checkbox(hide-details :label="'Receive Emails with weekly tips and other stuffs'")

mixin accounts 
  v-flex(xs12).display-1 Account Settings
  a Suspend my account

div
  v-form(v-model="valid")
    v-container
      v-layout(row wrap)
        +jobprefs
      v-layout(row wrap)
        +privacy
      v-layout(row wrap)
        +password
      v-layout(row wrap)
        +other
      v-layout(row wrap)
        +accounts
      v-layout
        v-spacer
        v-btn(large color="primary") Finish

</template>


<style lang="stylus" scoped>
.container
  width 50%
.subheader 
  height 64px
.display-1
  margin 16px 0px
.small-width
  width 130px
.small-height
  height 30px
.line-height-match
  line-height 30px
.job-pref-selector
  border 1px solid #000
  border-radius 2px
  * > .flex
    min-width 50%
    flex-basis 50% !important
@media screen and (max-width: 800px)
  .container
    width 90% !important
@media screen and (max-width: 600px)
  .subheader
    padding-top 16px
    padding-left 0px
    height 16px

</style>
