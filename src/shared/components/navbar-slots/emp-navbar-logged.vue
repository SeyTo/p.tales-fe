<script>
import StuAuthTab from '@/shared/components/stu-authtab'

/**
 * Employer page when in '/employer/home'
 */
export default {
  name: 'emp-navbar-logged',

  props: {
    compactView: {
      default: false
    }
  },

  data () {
    return {
      'profileOptions': [
        { text: 'Profile' },
        { text: 'User Preferences' },
        { text: 'Terms & Conditions' },
        { text: 'Log Out' }
      ]
    }
  }

}
</script>

<template lang="pug">
div
  div(v-show="!compactView")
    v-btn(flat) Post a Job
    v-btn(flat) Search
    v-btn(flat) Listings
    v-btn(fab icon flat small)
      img(src="../../../assets/svg/notification.svg")
    v-menu(bottom left) 
      v-btn(slot="activator" fab small)
        img(src="@/assets/svg/avatar.svg").round
      v-list
        v-list-tile(v-for="(item, i) in profileOptions" :key="i" @click="") 
          v-list-tile-title {{ item.text }}

  div(v-show="compactView").compact
    v-btn(flat) Blogs
    v-btn(flat) Notifs
    v-expansion-panel(inset)
      v-expansion-panel-content
        div(slot="header") Profile
        div(v-for="(item, i) in profileOptions" :key="i")
          v-btn(flat) {{ item.text }}

</template>


<style lang="stylus">
// TODO: move to directive
.compact
  display flex
  flex-direction column
.round
  border-radius 50%
</style>
