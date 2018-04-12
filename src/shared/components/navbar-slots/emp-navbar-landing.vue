<script>
import StuAuthTab from '@/shared/components/stu-authtab'

/**
 * Employer page's navbar when in /employer/
 */
export default {

  name: 'emp-navbar-landing',

  props: {
    compactView: {
      default: false
    }
  },

  data () {
    return {
      // login/signup dialog toggler
      dialogToggle: false
    }
  },

  components: {
    'stu-auth-tab': StuAuthTab
  },

}
</script>

<template lang="pug">
div
  // -- nav buttons
  div(:class="{ compact: compactView }")
    v-btn(flat large) 
      | FOR STUDENTS
    v-btn(flat large) 
      | Log In
    v-btn(depressed large color="primary" @click.native.stop="dialogToggle = !dialogToggle")  
      | Sign Up

  // -- dialog for log in and Sign up
  stu-auth-tab(v-model="dialogToggle")
</template>
