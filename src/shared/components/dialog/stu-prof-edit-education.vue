<script>
/**
 * Dialog for education editing in student profile view.
 */
export default {
  name: 'stu-prof-edit-edu',

  props: [ 'profData', 'alive' ],

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
      major: null
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
        this.enroll.date = this.enroll.date || this.profData.date
        return this.enroll.date
      },
      set (val) { this.enroll.date = val }
    },
    mGraduate: {
      get () {
        // TODO get graduate date
        this.graduate.date = this.graduate.date || this.profData.date
        return this.graduate.date
      },
      set (val) { this.graduate.date = val }
    },
    mMajor: {
      get () {
        this.major = this.major || this.profData.subject
        return this.major
      },
      set (val) { this.major = val }
    }
  },

  watch: {
    alive (newAlive, oldAlive) {
      if (newAlive) {
        this.clear()
      }
    }
  },

  methods: {
    close () {
      this.$emit('close')
    },
    add () {
      if (this.profData) {
        this.edit()
      } else {
        this.$emit('add', 'testing')
      }
    },
    edit () {
      const finalData = { title: this.school, date: this.enroll.date, level: 'test level', subject: this.major }
      console.log(finalData)
      this.$emit('edit', finalData)
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
    this.clear()
  }

}
</script>


<template lang="pug">
v-card
  | {{ profData }}
  v-card-title.headline
    v-layout(align-center).pa-0
      | Education
      v-spacer
      v-btn(depressed fab icon small @click="close").ma-0
        v-icon close
  v-divider
  v-layout.pa-4
    img(src="../../../assets/svg/favicon.svg" height="96")
    v-flex.ml-4
      // -- university name
      v-text-field(
        label="School/University Name" 
        v-model="mSchool"
        :hint="'Let autocomplete help you.'"
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
    v-btn(flat @click="remove") Remove
    v-btn(flat @click="add") Add
    
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
