<script>

// TODO generalize
// const jobTypes = {
//   'entry': { name: 'entry' },
//   'parttime': { name: 'parttime' },
//   'internship': { name: 'internship' },
//   'otg': { name: 'otg' }
// }

export default {
  name: 'emp-create-new',

  data: () => ({
    selectedJobType: null,
    expiryDate: null,
    date: null,
    menu: false,
    modal: false,
    menu2: false,
    targeting: {
      schoolGroupModel: 'all',
      options: {
        'all': 'All X post-secondary school in Nepal',
        'manual': 'Manually Select Schools'
      },
      schools: [],
      selectedSchools: []
    }
  }),

  computed: { },

  methods: {
    selectJobType (type) {
      this.selectedJobType = type
      console.log('job ' + this.selectedJobType)
    }
  },

  components: { }
}
</script>


<template lang="pug">
mixin basic-section
  v-container
    v-layout
      v-flex
        v-text-field(
            name="jobtitle"
            label="Job Title"
          ).input-group--focused
        v-text-field(
            name="expiryDate"
            label="Select an Expiry Date"
          )
        v-checkbox(label="Paid")
        v-checkbox(label="Full Time")
        v-text-field(
            name="expectedSalary"
            label="Expected Salary"
          )
        v-text-field(
            name="jobDescription"
            label="Job Description (or paste your link here)"
          )
        v-text-field(
            name="vancanciesCount"
            label="Number of Vacancies"
          )

    v-layout
      v-spacer
      v-btn(flat) Next

mixin targeting-section
  v-container
    v-layout
      v-flex
        | Only allow students who attend school
        v-radio-group(v-model="targeting.schoolGroupModel") 
          v-radio(:label="targeting.options['all']" :value="'all'")
          v-radio(:label="targeting.options['manual']" :value="'manual'")

mixin filter-section
  v-container
    v-layout
      v-flex
        | Test 
mixin custom-section
  v-container
    v-layout
      v-flex
        | Test 

v-container
  // -- select a job type  
  h1 Create New Job Post
  v-layout(justify-center)
    v-flex(sm6 xs12 v-show="!selectedJobType").job-type-selector
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
    v-flex(sm7 xs12 v-show="selectedJobType")
      v-tabs(
          grow
        )
        v-tab Basic
        v-tab Targeting
        v-tab Filter
        v-tab Custom
        v-tab-item
          +basic-section
        v-tab-item
          +targeting-section
        v-tab-item
          +filter-section
        v-tab-item
          +custom-section
      
</template>


<style lang="stylus" scoped>
.job-type-selector
  .card
    _m = 16px
    min-height 82px
    margin _m _m 0 _m
</style>
