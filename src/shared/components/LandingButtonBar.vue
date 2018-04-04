<script>
import StudentAuthTab from './StudentAuthTab'

export default {

  name: 'landing-button-bar',

  data () {
    return { dialogToggle: false }
  },

  methods: {
    toggleVisibility () {
      this.formPassword.visibility = !this.formPassword.visibility
    }
  },

  components: {
    'student-auth-tab': StudentAuthTab
  }

}
</script>


<template lang="pug">
div

  v-btn(flat large) 
    | FOR EMPLOYERS
  v-btn(flat large) 
    | Blogs
  v-btn(flat large @click.stop="fixed = !fixed") 
    | Log In
  v-btn(depressed large color="primary" @click.native.stop="dialogToggle = !dialogToggle") 
    | Sign Up

  // Dialog for log in and Sign up
  student-auth-tab(v-model="dialogToggle")

</template>

