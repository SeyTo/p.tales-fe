<script>
import titlebar from '@/shared/components/card-comp/titlebar'

export default {
  name: 'stu-prof-newmodule-list',

  data: () => ({ }),

  computed: { },

  components: {
    'titlebar': titlebar
  }
}
</script>


<template lang="pug">
v-card
  titlebar(title="Something different for your profile")

  v-divider

  v-layout.pa-4
    | Github
    | Show off your coding contributions.
    | Website 
    | Do your have your own website?
    | Request More Modular features here.
  
</template>


<style lang="stylus" scoped>
</style>
