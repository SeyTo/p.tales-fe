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
  v-container(fluid)
    .part-2
      .part-1.mb-2
        v-avatar(size="88").sec-1.mr-2
          img(src="@/assets/svg/avatar.svg")
        v-layout(column).sec-2
          v-flex.sec-2-0
            div {{ name }}
            div {{ degree }}
            div {{ academy }}
          .sec-2-1
            v-layout(row justify-space-around)
              div GPA {{ gpa }}
              div {{ level }}
              div Class of {{ year }}
      v-flex.sec-3
        | section 3 
  v-card-actions
    v-spacer
    v-btn(flat) Invite
    v-btn(flat icon)
      v-icon bookmark_border
    v-btn(flat icon)
      v-icon more_vert
</template>


<style lang="stylus" scoped>
@import '../../assets/styles/_vars.styl'

_avatar_size = 96px
.card
  min-width t-basic-card-w !important
  max-width t-basic-card-w !important
.part-1
  display flex
.part-2
  // display flex
.sec-1
  height _avatar_size
  width _avatar_size
.sec-2
  // background-color #4a4
  .sec-2-0
    // background-color #56a
  .sec-2-1
    background-color #ccc
.sec-3
  background-color #aa0
.btn-bar
  background-color #a45

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
