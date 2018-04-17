<script>
import TalesNavBar from '@/shared/components/tales-navbar'

export default {
  name: 'emp-postsignupquery',

  data () {
    return { }
  },

  components: {
    'tales-navbar': TalesNavBar
  }

}
</script>


<template lang="pug">
div
  tales-navbar(containerSize="true" noSlot="true")
  h1 Employer Post Signup Query
</template>


<style lang="stylus" scoped>
</style>
