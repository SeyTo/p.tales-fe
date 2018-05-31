<script>
import titlebar from '@/shared/components/card-comp/titlebar'

export default {
  name: 'stu-prof-basicinfo',

  data () {
    return {

    }
  },

  computed: { },

  components: {
    'titlebar': titlebar
  }
}
</script>


<template lang="pug">
v-card
  titlebar(title="Basic Info")

  v-divider

  v-layout.pa-4
    v-flex
      v-text-field(
        label="Current City"
      ) 
      v-text-field(
        label="Email"
      ) 
      v-text-field(
        label="Phone Number"
        hint="We will never share it with any 3rd parties."
      ) 
      v-text-field(
        label="Date of Birth"
      ) 
      v-text-field(
        label="About You"
        multi-line
      ) 
      | Select a color that describes you
      | Connect to:
</template>


<style lang="stylus" scoped>
</style>
