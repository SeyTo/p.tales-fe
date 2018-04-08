<script>
export default {
  name: 'student-post-loginquery',
  data () {
    return {
      sex: null,
      genders: [ 'male', 'female' ]
    }
  }
}
</script>


<template lang="pug">
v-content
  v-layout(column align-content-start)
    v-flex(d-flex row).line
      .inline My name is 
      v-flex(d-flex row)
        v-text-field(name="First Name" label="First Name" id="firstName").med
        v-text-field(name="Last Name" label="Last Name" id="lastName").med
        .inline .
    v-flex(d-flex row).line
      .inline-select I am 
      v-select(:items="genders" v-model="sex" label="Gender").med
      .inline .
    v-flex(d-flex row).line
      .inline I currently live in
      v-text-field(name="Location" label="Location" id="location").med
      .inline .
    v-flex(d-flex row align-center).line
      .inline My resume
      v-btn(color="info") Upload Resume
      .inline .
    v-flex(d-flex row align-center).line
      .inline My profile photo
      v-btn(color="info") Upload Profile Photo
      .inline .
    v-flex(d-flex row).line
      .inline I completed 
      v-text-field(name="Degree" label="Degree" id="degree").med
      .inline in
      v-text-field(name="Major" label="Major" id="major").med
      .inline from
      v-text-field(name="University" label="University" id="university").med
      .inline .
    v-flex(d-flex row).line
      .inline I enrolled in 
      v-text-field(name="Month" label="Month" id="month").short
      v-text-field(name="Year" label="Year" id="year").short
      .inline and graduated in 
      v-text-field(name="Month" label="Month" id="month").short
      v-text-field(name="Year" label="Year" id="year").short
      .inline .
</template>


<style lang="stylus">
@import '../assets/styles/main.styl'
inline-padding-left=6px
.med
  max-width 200px
.short
  max-width 100px
.inline
  line-height 65px
  padding-left inline-padding-left
.inline-select
  line-height 74px
  padding-left inline-padding-left
.line
  flex-wrap wrap !important
  > div
    @extend .app-flow-text
  > *
    flex 0 0 auto !important
  white-space nowrap
input[type="text"]
  @extend .app-flow-text
.input-group
  margin-left inline-padding-left
.input-group__selections__comma
  @extend .app-flow-text
@media screen and (max-width: 500px)
  .med
    max-width 45%
  .short
    max-width 25%
</style>
