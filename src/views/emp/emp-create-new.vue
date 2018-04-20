<script>

const jobTypes = {
  'entry': { name: 'entry' },
  'parttime': { name: 'parttime' },
  'internship': { name: 'internship' },
  'otg': { name: 'otg' }
}

export default {
  name: 'emp-create-new',

  data () {
    return {
      selectedJobType: null
    }
  },

  computed: { },

  methods: {
    selectJobType (type) {
      this.selectedJobType = type
    }
  },

  components: { }
}
</script>


<template lang="pug">
v-container
  // -- select a job type  
  h1 Create New Job Post
  v-layout(justify-center)
    v-flex(sm5 xs12 v-show="!selectedJobType").job-type-selector
      | Select a job type
      v-card(hover @click.native.stop="selectJobType('entry')")
        v-card-title Entry
        v-card-text Full time jobs for students and graduates.
      v-card(hover @click.native.stop="selectJobType('parttime')")
        v-card-title Part Time
        v-card-text Jobs under 30hrs/week.
      v-card(hover @click.native.stop="selectJobType('intern')")
        v-card-title Internships
        v-card-text Full or part time internship
      v-card(hover @click.native.stop="selectJobType('otg')")
        v-card-title One Time Gigs
        v-card-text One time programs for 24-48 hrs.
  v-layout(justify-center v-show="selectedJobType")
    v-flex
      | {{ selectedJ }}
</template>


<style lang="stylus" scoped>
.job-type-selector
  .card
    _m = 16px
    min-height 82px
    margin _m _m 0 _m
</style>
