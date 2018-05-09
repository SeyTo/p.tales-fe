<script>
import BaseNavBar from '@/shared/components/navbars/base-navbar'

export default {
  name: 'emp-postsignupquery',

  data: () => ({
    valid: false,
    name: '',
    website: '',
    itype: '',
    location: '',
    industries: [
      'Marijuana', 'Hair Cut', 'Job Finder', 'Prisoner'
    ],
    onDemand: 0,
    formOrgName: {
      text: '',
      rules: [
        v => !!v || 'Organization name is required',
        v => v.length < 30 || 'Name too long'
      ]
    },
    formWebsite: {
      text: '',
      rules: [
        v => !!v || 'A website is required'
      ]
    },
    formOrgType: {
      text: '',
      rules: [
        v => !!v || 'Organization type is required'
      ]
    }
  }),

  components: {
    'base-navbar': BaseNavBar
  },

  mounted () { },

  destroyed () { }

}
</script>


<template lang="pug">
mixin basic-info
  v-flex(xs12).display-1 Basic Information
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Official Website *'")
  v-flex(xs12 sm7).header
    v-text-field(single-line v-model="formWebsite.text" :rules="formWebsite.rules" required)
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Organization Name *'")
  v-flex(xs12 sm7).header
    v-text-field(single-line v-model="formOrgName.name" :rules="formOrgName.rules" :counter="30" required)
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Industry Type *'")
  v-flex(xs12 sm7).header
    v-select(
        v-model="formOrgType.text"
        :rules="formOrgType.rules"
        :items="industries"
        dense
        multiple
        required
      )
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Location *'")
  v-flex(xs12 sm7).header
    v-select(
        hint="location of headquarters"
        v-model="location"
        dense
        required
      )

mixin contact-info
  v-flex(xs12).display-1 Contact Information
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Contact number for business calls'")
  v-flex(xs12 sm7)
    v-text-field(hint="A phonenumber we can contact you with (required)" required)
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Contact number for students'")
  v-flex(xs12 sm7)
    v-text-field(hint="A phonenumber students can contact you with")
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Contact address for students'")
  v-flex(xs12 sm7)
    v-text-field(hint="An address students can contact you with")
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Contact email for students'")
  v-flex(xs12 sm7)
    v-text-field(hint="An email students can contact you with")

mixin misc-info
  v-flex(xs12).display-1 Misc Information
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Founded Year'")
  v-flex(xs12 sm7)
    v-text-field
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Company Size'")
  v-flex(xs12 sm7)
    v-select
  v-flex(xs12 sm5).header
    v-subheader(v-text="'About Us'")
  v-flex(xs12 sm7)
    v-btn Enter
    v-btn Get it from the web
  v-flex(xs12 sm5).header
    v-subheader(v-text="'What is your title at company?'")
  v-flex(xs12 sm7)
    v-select(
        dense
        required
      )
  v-flex(xs12 sm6).header
    v-subheader(v-text="'Do you require an on demand job like (dog walker, driver etc)?'")
  v-flex(xs12 sm6)
    v-btn-toggle(v-model="onDemand")
      v-btn Yes
      v-btn No
  v-flex(xs12)
    v-subheader
      | Anything you would like to know.
      a Contact Us.


div
  base-navbar(containerSize="true" noSlot="true")
  v-form(v-model="valid")
    v-container
      v-layout(row wrap)
        +basic-info
      v-layout(row wrap)
        +contact-info
      v-layout(row wrap)
        +misc-info
      v-layout(row justify-center)
        v-btn(large color="primary") Finish

</template>


<style lang="stylus" scoped>
.container
  width 50%
.subheader
  height 64px
  padding-top 0 !important
.display-1
  margin 16px 0px
@media screen and (max-width: 800px)
  .container
    width 90% !important
@media screen and (max-width: 600px)
  .subheader
    padding-top 16px
    padding-left 0px
    height 16px
</style>
