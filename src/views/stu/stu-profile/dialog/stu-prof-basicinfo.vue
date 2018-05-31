<script>
import titlebar from '@/shared/components/card-comp/titlebar'

export default {
  name: 'stu-prof-basicinfo',

  props: {
    'pName': '',
    'pAddress': '',
    'pEmail': '',
    'pPhone': '',
    'pDob': '',
    'pAboutme': '',
    'pColor': '',
    'pSocial': {
      default: []
    }
  },

  data () {
    return {
      name: '',
      address: '',
      email: '',
      phone: '',
      dob: {
        menu: false,
        date: ''
      },
      aboutme: '',
      color: '',
      social: []
    }
  },

  computed: {
    mName: {
      get () {
        this.name = this.name || this.pName
        return this.name
      },
      set (val) {
        this.name = val
      }
    },
    mAddress: {
      get () {
        this.address = this.address || this.pAddress
        return this.address
      },
      set (val) {
        this.address = val
      }
    },
    mEmail: {
      get () {
        this.email = this.email || this.pEmail
        return this.email
      },
      set (val) {
        this.email = val
      }
    },
    mPhone: {
      get () {
        this.phone = this.phone || this.pPhone
        return this.phone
      },
      set (val) {
        this.phone = val
      }
    },
    mDob: {
      get () {
        this.dob.date = this.dob.date || this.pDob
        return this.dob.date
      },
      set (val) {
        this.dob.date = val
      }
    },
    mAboutme: {
      get () {
        this.aboutme = this.aboutme || this.pAboutme
        return this.aboutme
      },
      set (val) {
        this.aboutme = val
      }
    },
    mColor: {
      get () {
        this.color = this.color || this.pColor
        return this.color
      },
      set (val) {
        this.color = val
      }
    },
    mSocial: {
      get () {
        this.social = this.social || this.pSocial
        return this.social
      },
      set (val) {
        this.social = val
      }
    }
  },

  methods: {
    edit () {
      this.$emit('edit',
        {
          name: this.name,
          address: this.address,
          email: this.email,
          dob: this.dob.date,
          aboutme: this.aboutme,
          favcolor: 'green',
          social: this.social
        })
    }
  },

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
        v-model="mAddress"
      ) 

      v-text-field(
        label="Email"
        v-model="mEmail"
      ) 

      v-text-field(
        label="Phone Number"
        hint="We will never share it with any 3rd parties."
        v-model="mPhone"
      ) 

      v-menu(
          ref="dobMenu"
          :close-on-content-click="false"
          v-model="dob.menu"
          :nudge-right="40"
          :return-value.sync="mDob"
          transition="scale-transition"
          lazy offset-y full-width
          min-width="290px"
        )
          v-text-field(
            slot="activator" v-model="mDob"
            label="Date of Birth*" readonly hide-details
          ).pr-2 
          v-date-picker(
            v-model="mDob" type="month" 
            max="2019-01-01" min="1990-01-01"
            no-title scrollable) 
          v-spacer
          v-btn(flat color="primary" @click="dob.menu = false") Cancel 
          v-btn(flat color="primary" @click="$refs.dobMenu.save(mDob)") OK

      v-text-field(
        label="About You"
        v-model="mAboutme"
        multi-line no-resize hide-details counter="100" rows="3"
      ) 

      // TODO fab button 
      v-layout(align-center)
        v-btn(fab small icon :style="{ backgroundColor: 'blue' }") 
        span Select a color that describes you

      v-flex
        | Connect to:
        v-btn(icon fab flat small)
          img(src="@/assets/svg/facebook.svg") 
        v-btn(icon fab flat small)
          img(src="@/assets/svg/twitter.svg") 
        v-btn(icon fab flat small)
          img(src="@/assets/svg/google.svg") 
        v-btn(icon fab flat small)
          img(src="@/assets/svg/github-logo.svg") 
        v-btn(icon fab flat small)
          img(src="@/assets/svg/linkedin.svg") 

  v-layout
    v-spacer
    v-btn(flat @click="edit") 
      div Edit
</template>


<style lang="stylus" scoped>
</style>
