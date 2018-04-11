<script>
import StuNavbarLogged from '../shared/components/navbar-slots/stu-navbar-logged'
import TalesNavBar from '../shared/components/tales-navbar'

export default {
  name: 'student-profile',

  data () {
    return { }
  },

  mounted () { },

  beforeDestroy () { },

  components: {
    'tales-navbar': TalesNavBar,
    'stu-navbar-logged': StuNavbarLogged
  }

}
</script>

<template lang="pug">
div
  tales-navbar
    stu-navbar-logged

  v-container(container grid-list-md)
    v-layout(justify-center).sm-col
      
      // profile bill board
      v-flex(d-flex).profile-board.sm-full
        v-card.profile-board-pad
          v-layout(column)
            v-layout(justify-center column).sm-row
              // avatar container
              v-flex(d-flex xs5 sm5 md12)
                v-flex(d-flex justify-center pb-2)
                  v-avatar(:tile="false" :size=156)
                    img(src="../assets/svg/avatar.svg")
              // name container
              v-flex(d-flex xs7 sm7 md12)
                v-layout(column)
                  h2.text-sm-center Suru Dururu
                  p.text-sm-justify This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes.
            v-layout(justify-center column).sm-row
              v-flex
                div Email
                div suru@dururu.com
              v-flex
                div Contact
                div 981491535
            v-layout(justify-center column).sm-row
              v-flex
                div Address
                div some address
              v-flex
                div Some
                div Edit
            v-layout(justify-center column)
              v-flex
                img(src="../assets/svg/facebook.svg" height="36") 
                img(src="../assets/svg/twitter.svg" height="36") 

      // info cards
      v-flex(d-flex).info-card-container.sm-full
        v-layout(wrap align-content-start).info-card-layout
          v-flex(d-flex).info-card
            v-layout(column)
              v-flex
                v-card
                  v-card-title Profile Bill Board
                  v-card-text This is a sample  
              v-flex
                v-card
                  v-card-title Profile Bill Board
                  v-card-text This is a sample  
              v-flex
                v-card
                  v-card-title Profile Bill Board
                  v-card-text This is a sample  

          v-flex(d-flex).info-card
            v-layout(column)
              v-flex
                v-card
                  v-card-title Profile Bill Board
                  v-card-text This is a sample  
              v-flex
                v-card
                  v-card-title Profile Bill Board
                  v-card-text This is a sample  
              v-flex
                v-card
                  v-card-title Profile Bill Board
                  v-card-text This is a sample  

  </template>

<style lang="stylus">
_max-width = 156px + (48 * 2)px
_card-max-width = 200px + (48 * 2)px
_full-width = _max-width + 2 * (_card-max-width)
_card-container-full-width = 2 * (_card-max-width)
.at-width
  max-width _max-width
.profile-board
  max-width _max-width 
.info-card-container
  max-width _card-container-full-width
.info-card
  max-width _card-max-width
  min-width _card-max-width
// xs breakpoint
.profile-board-pad
  padding (16 * 3)px

@media screen and (max-width: 600px)
  .sm-row
    flex-direction row !important
  .sm-col
    flex-direction column !important
  .sm-full
    min-width 100% !important
    max-width 100% !important
  .info-card
    @extend .sm-full 
  .profile-board-pad
    padding (16 * 1.5)px
  .container
    padding-left 0 !important
    padding-right 0 !important

@media screen and (min-width: 450px)
  .md-row
    flex-direction row

@media screen and (max-width: _full-width)
  .info-card-layout
    flex-direction column
  .info-card-container
    max-width _card-max-width
    min-width _card-max-width

</style>
