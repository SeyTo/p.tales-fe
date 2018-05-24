<script>
import titlebar from '@/shared/components/card-comp/titlebar'
export default {
  name: 'stu-prof-edit-workhistory',

  props: {
    'profData': {
      default () {
        return {
          title: '',
          item1: '',
          item2: '',
          item3: '',
          item4: '',
          item5: '',
          item6: ''
        }
      }
    }
  },

  data () {
    return {
      name: null,
      website: null,
      position: null,
      enroll: {
        menu: false,
        date: null
      },
      desist: {
        menu: false,
        date: null
      },
      location: null,
      positionDetails: null,
      isNew: !this.profData.title
    }
  },

  computed: {
    mOrgName: {
      get () {
        this.name = this.name || this.profData.title
        return this.name
      },
      set (val) {
        this.name = val
      }
    },
    mWebsite: {
      get () {
        this.website = this.website || this.profData.item1
        return this.website
      },
      set (val) {
        this.website = val
      }
    },
    mPosition: {
      get () {
        this.position = this.position || this.profData.item2
        return this.position
      },
      set (val) {
        this.position = val
      }
    },
    mEnroll: {
      get () {
        this.enroll.date = this.enroll.date || this.profData.item3
        return this.enroll.date
      },
      set (val) {
        this.enroll.date = val
      }
    },
    mDesist: {
      get () {
        this.desist.date = this.desist.date || this.profData.item4
        return this.desist.date
      },
      set (val) {
        this.desist.date = val
      }
    },
    mLocation: {
      get () {
        this.location = this.location || this.profData.item5
        return this.location
      },
      set (val) {
        this.location = val
      }
    },
    mPositionDetails: {
      get () {
        this.positionDetails = this.positionDetails || this.profData.item6
        return this.positionDetails
      },
      set (val) {
        this.positionDetails = val
      }
    }
  },

  methods: {
    close () {
      this.$emit('close')
    },
    add () {
      if (!this.isNew) {
        this.edit()
      } else {
        this.$emit('add', this.createObject())
      }
    },
    edit () {
      this.$emit('edit', this.createObject())
    },
    remove () {
      this.$emit('remove')
    },
    clear () {
      this.name = this.website = this.enroll.date = this.desist.date = this.location = this.details = null
      this.enroll.model = this.desist.model = false
    },
    createObject () {
      return {
        name: this.name,
        website: this.website,
        position: this.position,
        start: this.enroll.date,
        leave: this.desist.date,
        location: this.location,
        details: this.positionDetails
      }
    }
  },

  components: {
    'titlebar': titlebar
  }
}
</script>


<template lang="pug">
v-card
  titlebar(title="Work History")

  v-divider

  v-layout.pa-4
    img(src="@/assets/svg/favicon.svg" height="96")
    v-flex.ml-4
      // -- Oranization name
      v-text-field(
        label="Organization Name" 
        v-model="mOrgName"
        :hint="'Type something, let autocomplete help you.'"
      )
      
      // -- Company website && position title
      v-layout
        v-text-field(
          label="Organization Website" 
          v-model="mWebsite"
        )
        v-text-field(
          label="Position(Title)" 
          v-model="mPosition"
        )
      // -- enroll & desist date
      v-layout
        v-menu(
          ref="enrollMenu"
          :close-on-content-click="false"
          v-model="enroll.menu"
          :nudge-right="40"
          :return-value.sync="mEnroll"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        )
          v-text-field(
            slot="activator"
            v-model="mEnroll"
            label="Start date*"
            readonly
          ).pr-2 
          v-date-picker(
            v-model="mEnroll" 
            type="month" 
            max="2019-01-01"
            min="1990-01-01"
            no-title scrollable) 
          v-spacer
          v-btn(flat color="primary" @click="enroll.menu = false") Cancel 
          v-btn(flat color="primary" @click="$refs.enrollMenu.save(mEnroll)") OK

        // -- menu date selector, graduation date
        v-menu(
          ref="desistMenu"
          :close-on-content-click="false"
          v-model="desist.menu"
          :nudge-right="40"
          :return-value.sync="mDesist"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        )
          v-text-field(
            slot="activator"
            v-model="mDesist"
            label="Leave date"
            hint="Leave empty if you still work here."
            readonly
          )
          v-date-picker(
            v-model="mDesist" 
            type="month" 
            max="2025-01-01"
            min="1990-01-01"
            no-title)
          v-spacer
          v-btn(flat color="primary" @click="desist.menu = false") Cancel 
          v-btn(flat color="primary" @click="$refs.desistMenu.save(mDesist)") OK

      // -- major
      v-text-field(
        label="Location" 
        v-model="mLocation")

      v-text-field(
        label="Position Details" 
        multi-line
        v-model="mPositionDetails")

  v-layout
    v-spacer
    v-btn(flat @click="remove" v-if="!isNew") Remove
    v-btn(flat @click="add") 
      div(v-if="isNew") Add 
      div(v-else) Edit
</template>


<style lang="stylus" scoped>
</style>
