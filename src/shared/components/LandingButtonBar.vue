<script>
import StudentAuthTab from './StudentAuthTab'

export default {

  name: 'landing-button-bar',

  data () {
    return {
      dialogToggle: false,
      isCompactView: false
    }
  },

  methods: {
    toggleVisibility () {
      this.formPassword.visibility = !this.formPassword.visibility
    }
  },

  components: {
    'student-auth-tab': StudentAuthTab
  },

  mounted () {
    // change button bar to vertical style with full width when width <= 500
    this.isCompactView = (this.$refs.bbar.clientWidth <= 500)? true : false
  }

}
</script>


<template lang="pug">

div
  div(ref="bbar" :class="{ compact: isCompactView }")
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


<style lang="stylus">
.compact
  display flex
  flex-direction column
</style>
