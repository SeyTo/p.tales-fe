<script>
/**
 * Component: For employer login/signup Tabbar dialog.
 * Login/Signup are not handled here. They are handled in stores.
 */
export default {
  name: 'emp-auth-tab',

  props: {
    'value': Boolean
  },

  data: () => ({
    activeTab: null,
    isLoginFormValid: false,
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
  }),

  computed: { },

  components: { }
}
</script>


<template lang="pug">
mixin signupTabItem
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
  
  // -- signup buttons
  v-card-actions
    v-spacer
    v-btn(color="green darken-1" flat="flat" @click.native="dialogToggle = false") Sign up 

mixin loginTabItem
  v-container
    div.centered
      // TODO create natural facebook button
      v-btn() Log In With facebook
      // TODO create google button
    v-form(v-model="isLoginFormValid")
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

  // -- login buttons
  v-card-actions
    v-spacer
    v-btn(color="green darken-1" flat="flat" @click.native="dialogToggle = false") Log In


v-dialog(lazy :value="value" @input="$emit('input', $event)")
  v-card
    // -- tabs container for LogIn and Sign Up
    v-tabs(v-model="activeTab" grow)
      v-tabs-slider(color="yellow")
      v-tab Log In
      v-tab Sign Up

      v-tab-item 
        +loginTabItem
      v-tab-item 
        +signupTabItem

</template>


<style lang="stylus" scoped>
</style>
