<script>
export default {
  'name': 'student-auth-tab',
  props: {
    'value': Boolean
  },
  data () {
    return {
      activeTab: null,
      isFormValid: false,
      isSignupFormValid: false,
      formEmail: {
        text: '',
        rules: [
          v => !!v || 'Email is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      },
      formPassword: {
        text: '',
        rules: [
          v => !!v || 'Password is required',
          v => v.length > 8 || 'Password should be atleast 8 characters'
        ],
        visibility: false
      },
      formFirstName: {
        text: '',
        rules: [
          v => !!v || 'First Name is required',
          v => v.length < 20 || 'Name should be less than 20 characters'
        ]
      },
      formLastName: {
        text: '',
        rules: [
          v => !!v || 'Last Name is required',
          v => v.length < 20 || 'Name should be less than 20 characters'
        ]
      }
    }
  }
}
</script>

<template lang="pug">
v-dialog(lazy :value="value" @input="$emit('input', $event)" max-width="500px")
  v-card
    // -- Tabs container for Log In and Sign Up
    v-tabs(v-model="activeTab" grow)
      v-tabs-slider(color="yellow")
      v-tab Log In
      v-tab Sign Up

      // log in tab items
      v-tab-item 
        v-container
          div.centered
            v-btn() Log In With facebook
          v-form(v-model="isFormValid") 
            v-text-field(
                label="E-mail" 
                v-model="formEmail.text" 
                :rules="formEmail.rules" 
                required
                :type="'email'"
              )/
            v-text-field(
                label="Password" 
                v-model="formPassword.text" 
                :rules="formPassword.rules" 
                required
                :type="formPassword.visibility? 'text':'password'"
                :append-icon="formPassword.visibility ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (formPassword.visibility = !formPassword.visibility)"
                min="8"
              )/

        v-card-actions
          v-spacer
          v-btn(color="green darken-1" flat="flat" @click.native="dialogToggle = false") Log In

      // sign up tab items
      v-tab-item 
        v-container
          v-form(v-model="isSignupFormValid") 
            v-text-field(
                label="First Name" 
                v-model="formFirstName.text" 
                :rules="formFirstName.rules" 
                required
                :type="'text'"
              )/
            v-text-field(
                label="Last Name" 
                v-model="formLastName.text" 
                :rules="formLastName.rules" 
                required
                :type="'text'"
              )/
            v-text-field(
                label="E-mail" 
                v-model="formEmail.text" 
                :rules="formEmail.rules" 
                required
                :type="'email'"
              )/
            v-text-field(
                label="Password" 
                v-model="formPassword.text" 
                :rules="formPassword.rules" 
                required
                :type="formPassword.visibility? 'text':'password'"
                :append-icon="formPassword.visibility ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (formPassword.visibility = !formPassword.visibility)"
                min="8"
              )/
        
        v-card-actions
          v-spacer
          v-btn(color="green darken-1" flat="flat" @click.native="dialogToggle = false") Sign up 

</template>

<style lang="stylus" scoped>
.centered 
  display flex
  justify-content center
</style>
