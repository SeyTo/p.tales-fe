<script>
export default {
  name: 'student-profile',
  data () {
    return {
    }
  },
  computed: {
    ifSmallSized () { return this.$vuetify.breakpoint.smAndDown },
    masterLayout () {
      const binding = {}
      if (this.$vuetify.breakpoint.xsAndDown) {
        binding.column = true
        binding.wrap = true
      }
      if (this.$vuetify.breakpoint.mdAndUp) {
        binding.row = true
        binding.column = false
      }
      return binding
    },
    masterContainer () {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) {
        binding.fluid = true
      }
      return binding
    }
  }
}
</script>

<template lang="pug">
v-container(container)
  v-layout(row wrap justify-center)
    
    // profile bill board
    v-flex(d-flex xs12 sm8 md3)
      v-card(color="indigo" dark)
        v-layout(column)
          v-layout(justify-center column).sm-row
            // avatar container
            v-flex(d-flex xs5 sm5 md12)
              div
                v-avatar(:tile="false" :size="156")
                  img(src="../assets/svg/avatar.svg")
            // name container
            v-flex(d-flex xs7 sm7 md12)
              v-layout(column)
                h2 Suru Dururu
                p This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes.
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
    v-flex(d-flex xs12 sm12 md8)
      v-layout(wrap align-content-start)
        v-flex(d-flex xs12 sm6)
          v-layout(column)
            v-flex
              v-card(color="red" dark)
                v-card-title Profile Bill Board
                v-card-text This is a sample  
            v-flex
              v-card(color="red" dark)
                v-card-title Profile Bill Board
                v-card-text This is a sample  
            v-flex
              v-card(color="red" dark)
                v-card-title Profile Bill Board
                v-card-text This is a sample  

        v-flex(d-flex xs12 sm6)
          v-layout(column)
            v-flex
              v-card(color="orange" dark)
                v-card-title Profile Bill Board
                v-card-text This is a sample  
            v-flex
              v-card(color="orange" dark)
                v-card-title Profile Bill Board
                v-card-text This is a sample  
            v-flex
              v-card(color="orange" dark)
                v-card-title Profile Bill Board
                v-card-text This is a sample  

</template>

<style lang="stylus">
.profile-pic
  height 124px
  width 124px
  border-radius 50%
@media screen and (max-width: 600px)
  .sm-row
    flex-direction row !important
@media screen and (min-width: 450px)
  .md-row
    flex-direction row
</style>
