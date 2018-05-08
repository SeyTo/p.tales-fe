<script>
import JobDescCard from '@/shared/components/job-desc-card'
import JobDescCardMax from '@/shared/components/job-desc-card-max'

export default {
  name: 'stu-jobs-applications',

  data: () => ({
    testjob: {
      role: 'Ghost Busters Front End',
      emp: {
        name: 'Ghost Busters Inc.',
        address: 'Santa Montana, California'
      },
      about: 'Just join us to see the thrilling adventure of capturing ghost. You will be on the front line BTW. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      deadline: 'Tomorrow. LOL'
    },
    jobDialog: {
      model: false,
      selectedJob: null
    }
  }),

  methods: {
    openJobDialog () {
      console.log('testing')
      console.log(this.jobDialog.model)
      this.jobDialog.selectedJob = this.testjob
      this.jobDialog.model = true
    }
  },

  components: {
    'job-desc-card': JobDescCard,
    'job-desc-card-max': JobDescCardMax
  }

}
</script>


<template lang="pug">
v-container
  v-layout(column)
    v-flex
      .display-1.text-xs-center.mb-3 Your Applications
    v-layout(justify-center)
      v-layout(wrap justify-start grid-list-lg)
        template(v-for="i in 10")
          v-flex(md4 sm6 xs12).pa-2
            job-desc-card(:job="testjob" :hasApplied="true" @click.native.stop="openJobDialog")

  v-dialog(v-model="jobDialog.model")
    job-desc-card-max(:job="jobDialog.selectedJob" :hasApplied="true")
    
</template>


<style lang="stylus" scoped>
@import '../../assets/styles/_vars.styl'

</style>
