<script>
/**
 * Dialog for education editing in student profile view.
 */
export default {
  name: 'stu-prof-edit-edu',

  props: {
    'profData': {
      default () {
        return {
          title: '',
          item1: '',
          item2: '',
          item3: ''
        }
      }
    }
  },

  data () {
    return {
      school: null,
      enroll: {
        menu: false,
        date: null
      },
      graduate: {
        menu: false,
        date: null
      },
      major: null,
      isNew: !this.profData.title
    }
  },

  computed: {
    mSchool: {
      get () {
        this.school = this.school || this.profData.title
        return this.school
      },
      set (val) {
        this.school = val
      }
    },
    mEnroll: {
      get () {
        this.enroll.date = this.enroll.date || this.profData.item1
        return this.enroll.date
      },
      set (val) { this.enroll.date = val }
    },
    mGraduate: {
      get () {
        // TODO get graduate date
        this.graduate.date = this.graduate.date || this.profData.item2
        return this.graduate.date
      },
      set (val) { this.graduate.date = val }
    },
    mMajor: {
      get () {
        this.major = this.major || this.profData.item3
        return this.major
      },
      set (val) { this.major = val }
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
        this.$emit('add', { title: this.school, date: this.enroll.date, level: 'test level', subject: this.major })
      }
    },
    edit () {
      this.$emit('edit', { title: this.school, date: this.enroll.date, level: 'test level', subject: this.major })
    },
    remove () {
      this.$emit('remove')
    },
    clear () {
      this.school = this.enroll.date = this.graduate.date = this.major = null
      this.enroll.model = this.graduate.model = false
    }
  },

  components: { },

  mounted () { },

  destroyed () {
    // destroying component is important for renewed data to work after reopening this component.
    this.clear()
  }

}
</script>


<template lang="pug">
v-card
  v-card-title.headline
    v-layout(align-center).pa-0
      | Education
      v-spacer
      v-btn(depressed fab icon small @click="close").ma-0
        v-icon close

  v-divider
  v-layout.pa-4
    img(src="@/assets/svg/favicon.svg" height="96")
    v-flex.ml-4
      // -- university name
      v-text-field(
        label="School/University Name" 
        v-model="mSchool"
        :hint="'Type something, let autocomplete help you.'"
      )
      
      // -- enroll & graduate date
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
            label="Enroll date*"
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
          ref="graduateMenu"
          :close-on-content-click="false"
          v-model="graduate.menu"
          :nudge-right="40"
          :return-value.sync="mGraduate"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        )
          v-text-field(
            slot="activator"
            v-model="mGraduate"
            label="Graduation date*"
            readonly
          )
          v-date-picker(
            v-model="mGraduate" 
            type="month" 
            max="2025-01-01"
            min="1990-01-01"
            no-title)
          v-spacer
          v-btn(flat color="primary" @click="graduate.menu = false") Cancel 
          v-btn(flat color="primary" @click="$refs.graduateMenu.save(mGraduate)") OK

      // -- major
      v-text-field(
        label="Major" 
        v-model="mMajor")
  v-layout
    v-spacer
    v-btn(flat @click="remove" v-if="!isNew") Remove
    v-btn(flat @click="add") 
      div(v-if="isNew") Add 
      div(v-else) Edit
    
</template>


<style lang="stylus" scoped>
.card__title
  position relative
  text-align center
  .close
    position absolute
    right 0
    top 0
    
</style>
