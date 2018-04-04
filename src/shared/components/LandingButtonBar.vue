<script>
export default {
  name: 'landing-button-bar',
  props: { },
  data () {
    return {
      activeTab: null,
      isFormValid: false,
      formName: '',
      formNameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ],
      formEmail: '',
      formEmailRules: [
        v => !!v || 'Email is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: { },
  methods: { }
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
  v-btn(depressed large color="primary" @click.native.stop="dialogToggle = true") 
    | Sign Up

  // Dialog for log in and Sign up
  v-dialog(lazy v-model="dialogToggle" max-width="500px")
    v-card

      // -- Tabs container for Log In and Sign Up
      v-tabs(v-model="activeTab" grow)
        v-tabs-slider(color="yellow")
        v-tab Log In
        v-tab Sign Up
        // log in tab items
        v-tab-item 
          v-container
            v-form(v-model="isFormValid") 
              v-text-field(label="Name" v-model="formName" :rules="formNameRules" :counter="10" required)/
              v-text-field(label="E-mail" v-model="formEmail" :rules="formEmailRules" required)/

        // sign up tab items
        v-tab-item 
          v-card-text Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      v-card-actions
        v-spacer
        v-btn(color="green darken-1" flat="flat" @click.native="dialogToggle = false") Disagree 

</template>

<style lang="stylus" scoped> 
</style>
