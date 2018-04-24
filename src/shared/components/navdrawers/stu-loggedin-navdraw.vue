<script>
import TalesNavdrawer from '@/shared/components/tales-navdrawer'

export default {
  name: '',
  data () {
    return {
      // TODO use global instance of these options
      'jobsOptions': [
        { text: 'Search' },
        { text: 'Your Applications' },
        { text: 'Saved Jobs' },
        { text: 'Invitations' }
      ],
      'profileOptions': [
        { text: 'Profile' },
        { text: 'User Preferences' },
        { text: 'Terms & Conditions' },
        { text: 'Log Out' }
      ]
    }
  },

  components: {
    'tales-navdraw': TalesNavdrawer
  }
}
</script>


<template lang="pug">
tales-navdraw
  v-expansion-panel(inset)
    v-expansion-panel-content
      div(slot="header") Jobs & Interns
      div(v-for="(item, i) in jobsOptions" :key="i")
        v-btn(flat) {{ item.text }}
  v-btn(flat) Blogs
  v-btn(flat) Notifs
  v-expansion-panel(inset)
    v-expansion-panel-content
      div(slot="header") Profile
      div(v-for="(item, i) in profileOptions" :key="i")
        v-btn(flat) {{ item.text }}

</template>


<style lang="stylus" scoped>
.navigation-drawer
  display flex
  flex-direction column  
</style>
