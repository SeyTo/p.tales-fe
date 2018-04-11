<script>
/**
 * Student navbar when user is logged in. Used in '/student/home'
 */
export default {
  name: 'stu-navbar-logged',
  props: {
    compactView: {
      default: false
    }
  },

  data () {
    return {
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
  }
}
</script>

<template lang="pug">
div
  div(v-show="!compactView")
    v-menu(bottom left) 
      v-btn(slot="activator" flat) Jobs & Interns
      v-list
        v-list-tile(v-for="(item, i) in jobsOptions" :key="i" @click="") 
          v-list-tile-title {{ item.text }}
    v-btn(flat) Blogs
    v-btn(flat) Notifs
    v-menu(bottom left) 
      v-btn(slot="activator" fab small)
        img(src="@/assets/svg/avatar.svg").round
      v-list
        v-list-tile(v-for="(item, i) in profileOptions" :key="i" @click="") 
          v-list-tile-title {{ item.text }}

  div(v-show="compactView").compact
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


<style lang="stylus">
// TODO: move to directive
.compact
  display flex
  flex-direction column
.round
  border-radius 50%
</style>
