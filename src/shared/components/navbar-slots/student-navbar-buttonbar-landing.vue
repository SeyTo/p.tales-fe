<script>
import StudentAuthTab from '@/shared/components/StudentAuthTab'

/**
 * Student navbar when in '/student/'
 */
export default {

  name: 'student-navbar-buttonbar-landing',

  data () {
    return {
      // login/signup dialog toggler
      dialogToggle: false,
      isCompactView: false
    }
  },

  components: {
    'student-auth-tab': StudentAuthTab
  },

  mounted () {
    // change button bar to vertical style in full width when width <= 500
    // TODO: remove width dependency, rather use props
    this.isCompactView = (this.$refs.bbar.clientWidth <= 500)
  }

}
</script>


<template lang="pug">

div
  // -- nav buttons
  div(ref="bbar" :class="{ compact: isCompactView }")
    v-btn(flat large) 
      | FOR EMPLOYERS
    v-btn(flat large) 
      | Blogs
    v-btn(flat large @click.stop="fixed = !fixed") 
      | Log In
    v-btn(depressed large color="primary" @click.native.stop="dialogToggle = !dialogToggle") 
      | Sign Up

  // -- dialog for log in and Sign up
  student-auth-tab(v-model="dialogToggle")

</template>


<style lang="stylus">
// TODO: remove dependency
.compact
  display flex
  flex-direction column
</style>
