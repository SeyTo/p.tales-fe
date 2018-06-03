<script>
// TODO rename details.address to company.address
export default {
  name: 'job-details',

  data: () => ({
    title: '',
    company: {
      name: ''
    },
    details: {
      aboutRole: {
        icon: 'aboutRole',
        role: 'Junior Copy Write Contractor',
        time: '(Full-Time)',
        address: 'Oakland, USA',
        salary: '$54-70,000 + Benefits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      skills: [
        'READING', 'SKILLING', 'WRITING', 'COPYING', 'PLAGIARISM'
      ],
      description: {
        main: 'Are you a human person? and not a lizard person like Mark Zuckerbot? Do you have the passion to copy unknown peoples work and claim it as your own work? Then we want you to be in our team. \n\nAs our copy writer you will be asked to gently plagarize other peoples work. *Copy them but dont make them look alike* meme here. You will have to work even when your wife call you for special treats else we will be forced to fire you. Just kidding. Not really. You need to be under 25 years old but have atleast 30+ years of work experience. \nThe skillset: \n  1. Look away when you get caught copying.  2. Pen holding.  3. Chinese eye making skills.  4. Bottle flip challenge champion. '
      },
      lastDate: {
        date: '1st April',
        weeks: '10 weeks from today'
      },
      location: {
        location: 'Oakland, USA'
      }
    },
    moreDetails: {
      sameCompanyJobs: [
        { title: 'Senior Copy Writer', extra: 'Full-Time' },
        { title: 'Older Copy Writer', extra: 'Part-Time' },
        { title: 'Grandad Copy Writer', extra: '' }
      ],
      similarJobs: [
        { title: 'Baby Copy Writer', extra: 'Full-Time', address: 'Kathmandu', company: 'Ad-word Google Nepal' },
        { title: 'Toddler Copy Writer', extra: 'Part-Time', address: 'Kathmandu', company: 'Vista Vasta' },
        { title: 'Book Writer', extra: '', address: 'Parsa', company: 'Senior Citizens Home' }
      ]
    }
  }),

  computed: { },

  components: { },

  mounted () {
    this.title = 'Junior Copy Write Contractor'
    this.company.name = 'Disney Oakland'
  }
}
</script>


<template lang="pug">
v-container

  .header
    .display-1.bold {{ title }}
    span.headline at &nbsp;
    span.headline.bold {{ company.name }}

  .button-bar.mb-5
    v-btn(color="primary")  Apply
    v-btn(color="secondary") View Company

  v-layout(wrap).other
    v-flex.main(sm8 xs12)
      .about-role.mb-5
        .title.thin.mb-3 About Role
        v-layout.mid
          .logo.mr-3
            img(src="../assets/svg/disney.svg" width="86")
          v-flex.role-details
            v-layout.role-text 
              .role.bold {{ details.aboutRole.role }} &nbsp;
              .role-time {{ details.aboutRole.time }}
            .address-text {{ details.aboutRole.address }}
            .salary-text {{ details.aboutRole.salary }}
        .desc
          | {{ details.aboutRole.description }}

      .skills.mb-5
        .title.thin.mb-3 Skills
        template(v-for="i in details.skills")
          v-chip(color="secondary")
            b {{ i }}

      .description.mb-5
        .title.thin.mb-3 Description
        pre {{ details.description.main }} 

      v-layout.lastdate.mb-5
        .subheading.italics.thin Last date of application :&nbsp;
        .subheading.bold {{ details.lastDate.date }}&nbsp;
        .subheading.bold ({{ details.lastDate.weeks }})

      .location.mb-5
        .title.thin.mb-3 Location
        .subheading {{ details.location.location }}
        .map-temp

      .button-bar.mb-5
        v-btn(color="primary")  Apply
        v-btn(color="secondary") View Company

    v-flex.extra(sm4 xs12)
      // same company jobs
      v-flex
        .body-2.thin More from {{ company.name }}
        template(v-for="job in moreDetails.sameCompanyJobs")
          .bold {{ job.title }} ({{ job.extra }}) 
      v-flex
        .body-2.thin Similar Jobs
        template(v-for="job in moreDetails.similarJobs")
          .bold {{ job.title }} 
          span {{ job.extra }}
          span {{ job.company }} - {{ job.address }}
        
  </template>


<style lang="stylus" scoped>
.header
  // background-color blue
  padding-top 5vh
  min-height 20vh
.button-bar
  // background-color green
  .btn
    min-width 160px
.main
  // background-color pink
  pre
    font-family roboto
  .about-role
    // background-color blue
    .mid
      .role-details
        font-size 17px
      .role-text
        .role 
          //
        .role-time
          // 
.extra
  // background-color red
.other
  // background-color #fab
.map-temp
  // background-color #9af
  border 1px solid #000
  height 400px
  width 470px
</style>
