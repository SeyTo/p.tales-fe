<script>
import TalesNavBar from '@/shared/components/tales-navbar'

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
    onDemand: 0
  }),

  components: {
    'tales-navbar': TalesNavBar
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
    v-text-field(single-line v-model="website" required)
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Organization Name *'")
  v-flex(xs12 sm7).header
    v-text-field(single-line v-model="name" :counter="30" required)
  v-flex(xs12 sm5).header
    v-subheader(v-text="'Industry Type *'")
  v-flex(xs12 sm7).header
    v-select(
        v-model="itype"
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
  tales-navbar(containerSize="true" noSlot="true")
  v-form(v-model="valid")
    v-container
      v-layout(row wrap)
        +basic-info
      v-layout(row wrap)
        +contact-info
      v-layout(row wrap)
        +misc-info
      v-btn(xs12 block color="primary") Finish

</template>


<style lang="stylus" scoped>
.container
  width 50%
.subheader
  height 64px
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
