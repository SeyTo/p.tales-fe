<script>
export default {
  name: 'LoginDialog',
  props: {
    enable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: null,
      toggle: false
    }
  },
  computed: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0).toString()
    },
    dialogToggle: {
      set(val) {
        this.toggle = val
        console.log('set: ' + this.toggle)
      },
      get() {
        // this.toggle = this.enable
        console.log('get: ' + this.toggle)
        return this.toggle
      }
    }
  }
}
</script>

<template lang="pug">
div
  v-btn(flat large @click.native.stop="enable = !enable") 
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
        v-tab-item 
          v-card-text Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        v-tab-item 
          v-card-title(class="headline") Use Google's location service? 
            v-card-text Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      v-card-actions
        v-spacer
        v-btn(color="green darken-1" flat="flat" @click.native="dialog = false") Disagree 
</template>

<style lang="stylus" scoped> 
</style>
