<script>
export default {
  name: 'stu-desc-card',

  data: () => ({
    avatar: '',
    name: 'Jane Shepard',
    degree: 'Masters in Taking Degree',
    academy: 'Kathmandu University',
    gpa: '4',
    level: 'MBTD',
    year: '2016',
    hidden: {
      avatar: false,
      name: false
    }

  }),

  computed: { },

  components: { }
}
</script>


<template lang="pug">
v-card(hover)
  .part-2.pa-3
    .part-1.mb-2
      v-avatar(size="72").sec-1.mr-2
          img(src="@/assets/svg/avatar.svg")
      v-layout(column).sec-2
        v-flex.sec-2-0
          div.title {{ name }}
          div.caption {{ degree }}
          div.caption {{ academy }}
    .part-3.my-2.grey--text.text--darken-2.body-2
      v-layout(row justify-space-around)
        div Masters
        div GPA {{ gpa }}
        div Class of {{ year }}
    v-flex.sec-3
      | section 3 

  v-card-actions
    v-btn(flat icon)
      v-icon bookmark_border
    v-btn(flat block) Invite
    v-btn(flat icon)
      v-icon more_vert
</template>


<style lang="stylus" scoped>
@import '../../assets/styles/_vars.styl'

_avatar_size = 96px
.card
  min-width t-basic-card-w
  max-width t-basic-card-w
.part-1
  display flex
.part-2
  // display flex
.sec-1
  height t-avatar-sm 
  width _avatar_size
.sec-2
  // background-color #4a4
  .sec-2-0
    // background-color #56a
.part-3
  background-color #ccc
.sec-3
  // background-color #aa0
.btn-bar
  background-color #a45

@media $display-breakpoints.xs-only
  .card
    max-width 100%
    width 100%

// @media screen and (max-width: 600px)
//   .part-2 
//     display flex
//   .card 
//     width 100% !important
//     max-width 100% !important
//   .sec-3
//     flex-basis 50%
//   .part-1
//     flex-basis 50%
  
</style>
