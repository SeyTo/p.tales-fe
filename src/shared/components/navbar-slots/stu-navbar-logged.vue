<script>
/**
 * Student navbar when user is logged in. Used in '/student/home'
 */
export default {
  name: 'stu-navbar-logged',

  data () {
    return {
      'jobsOptions': [ 'search', 'saved jobs', 'applications', 'invitations' ]
    }
  }
}
</script>

<template lang="pug">
div
  div(:class="{ compact: false }")
    | Testing Logged Bar
</template>


<style lang="stylus">
// TODO: move to directive
.compact
  display flex
  flex-direction column
</style>
