<script>
/**
 * Component: For student login Tabbar dialog.
 * Login auths are not handled here. Log in states are handled in stores.
 */
export default {
  'name': 'stu-auth-tab',

  props: {
    // primary dialog state (visible/invisible)
    'value': Boolean,
    'activeTab': {
      default: 0
    }
  },

  data () {
    return {
      isLoginFormValid: false,
      isSignupFormValid: false,
      // FIX ME: vuetify bug, activeTabIndex cannot be > 1 else no tab is initially shown
      // TODO: manually click on tab bars
      activeTabIndex: 0,
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
  },

  methods: {
    validate (type) {
      if (type === 'login') {
        this.$emit('validate', 'login')
      } else if (type === 'signup') {
        this.$emit('validate', 'signup')
      }
    }
  }
}
</script>


<template lang="pug">
mixin or-line
  v-layout(justify-center).ma-3
    v-flex.or-line.accent
    .subheading.bold OR
    v-flex.or-line.accent

mixin buttons-bar(type)
  v-layout(column)
    v-flex.text-sm-center.subheading
      = type 
      | using
    v-layout
      v-flex.ma-2
        v-btn(block) 
          img(src="@/assets/svg/facebook_plain.svg" height="26")
          v-flex Facebook
      v-flex.ma-2
        v-btn(block)
          img(src="@/assets/svg/google.svg" height="26")
          v-flex Google

mixin signupTabItem
  v-layout(column).pa-3
    +buttons-bar('Sign up ')
    +or-line
    v-form(v-model="isSignupFormValid")
      v-text-field(
          label="Full Name"
          v-model="formFirstName.text"
          :rules="formFirstName.rules"
          required
          :type="'text'"
        )
      v-text-field(
          label="E-mail"
          v-model="formEmail.text"
          :rules="formEmail.rules"
          required
          :type="'email'"
        )
      v-text-field(
          label="Password"
          v-model="formPassword.text"
          :rules="formPassword.rules"
          required
          :type="formPassword.visibility? 'text':'password'"
          :append-icon="formPassword.visibility ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (formPassword.visibility = !formPassword.visibility)"
          min="8"
        )

  // -- signup buttons
  v-card-actions
    v-spacer
    v-btn(color="green darken-1" flat="flat" @click.native="validate('signup')") Sign up


mixin login-tab-item
  v-layout(column).pa-3
    +buttons-bar('Log in ') 
    +or-line
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
    v-btn(color="green darken-1" flat="flat" @click.native="validate('login')") Log In

// -- start here
v-card.fix-height
  v-tabs(v-model="activeTabIndex" grow)
    // TODO tabs do not change when 'activeTab' is set, see issue #3699 of vuetify
    v-tab Log In
    v-tab Sign Up

    v-tab-item
      +login-tab-item
    v-tab-item
      +signupTabItem

</template>


<style lang="stylus" scoped>
@import '../../../assets/styles/_vars.styl'
.fix-height
  min-height 500px
.centered
  display flex
  justify-content center
.or-line
  height 2px
  align-self center
  margin 0 t-spacer3
</style>
