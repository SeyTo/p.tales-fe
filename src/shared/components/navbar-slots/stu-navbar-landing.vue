<script>
import StuAuthTab from '@/shared/components/stu-authtab'

/**
 * Student navbar when in '/student/'
 */
export default {

  name: 'stu-navbar-landing',

  props: [
    // defines a compact view for this component
    'compactView'
  ],

  data () {
    return {
      // login/signup dialog toggler
      dialogToggle: false
    }
  },

  components: {
    'stu-auth-tab': StuAuthTab
  },

  mounted () {
    // this.data.isCompactView = (this.$refs.bbar.clientWidth <= 500)
  }

}
</script>


<template lang="pug">

div
  // -- nav buttons
  div(:class="{ compact: compactView }")
    v-btn(flat large) 
      | FOR EMPLOYERS
    v-btn(flat large) 
      | Blogs
    v-btn(flat large) 
      | Log In
    v-btn(depressed large color="primary" @click.native.stop="dialogToggle = !dialogToggle") 
      | Sign Up

  // -- dialog for log in and Sign up
  stu-auth-tab(v-model="dialogToggle")

</template>


<style lang="stylus">
// TODO: move to master style page 
.compact
  display flex
  flex-direction column
</style>
