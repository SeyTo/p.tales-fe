<script>
export default {
  name: 'landing-button-bar',
  props: {
    enable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      drawer: false,
      active: null,
      toggle: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0).toString()
    },
    dialogToggle: {
      set (val) {
        this.toggle = val
        console.log('set: ' + this.toggle)
      },
      get () {
        // this.toggle = this.enable
        console.log('get: ' + this.toggle)
        return this.toggle
      }
    }
  },
  methods: {
    closed (event) {
      console.log('closed')
      console.dir(event)
    }
  }
}
</script>

<template lang="pug">
div
  v-btn(flat large @click.native.stop="drawer = !drawer") 
    | FOR EMPLOYERS
  v-btn(flat large @click.stop="clipped = !clipped") 
    | Blogs
  v-btn(flat large @click.stop="fixed = !fixed") 
    | Log In
  v-btn(depressed large color="primary" @click.native.stop="dialogToggle = true") 
    | Sign Up

  v-dialog(lazy v-model="dialogToggle" max-width="500px")
    v-card
      v-tabs(v-model="active" grow)
        v-tabs-slider(color="yellow")
        v-tab Log In
        v-tab Sign Up
        // log in tab items
        v-tab-item 
          v-container
            v-form(v-model="valid") 
              v-text-field(label="Name" v-model="name" :rules="nameRules" :counter="10" required)/
              v-text-field(label="E-mail" v-model="email" :rules="emailRules" required)/

        // sign up tab items
        v-tab-item 
          v-card-text Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      v-card-actions
        v-spacer
        v-btn(color="green darken-1" flat="flat" @click.native="dialog = false") Disagree 

</template>

<style lang="stylus" scoped> 
</style>
