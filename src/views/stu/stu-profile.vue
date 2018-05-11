<script>
import StuInfocardBase from './stu-prof-infocards/stu-infocard-base.vue'
import StuInfocardContentIcontext from './stu-prof-infocards/stu-infocard-content-icontext'
import StuProfileBoard from '@/shared/components/stu-profile-billboard'
import StuInfocardContentChips from './stu-prof-infocards/stu-infocard-content-chips'
import Vue from 'vue'

// dialogs
import StuProfEditSkills from '@/shared/components/dialog/stu-prof-edit-skills'
import StuProfEditEdu from '@/shared/components/dialog/stu-prof-edit-education'

export default {
  name: 'student-profile',

  props: { },

  data: () => ({
    avatar: 'need absolute path/proper/context url, else wont load, cause webpack',
    name: '',
    favcolor: '#04a',
    aboutme: '',
    email: '',
    address: '',
    dob: '',
    phonenumber: '',
    editDialog: {
      index: 0,
      model: false,
      name: null,
      component: null,
      preData: false,
      data: null
    },
    currentDialogComponent: null,
    dialogModel: false,
    infoCards: {
      'education': {
        name: 'education',
        id: 'Education',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditEdu
      },
      'workhistory': {
        'name': 'workhistory',
        'id': 'Work History',
        'nullText': 'List here the places you have worked before.'
      },
      'gigsfreelances': {
        'name': 'gigsfreelances',
        'id': 'Gigs & Freelances',
        'nullText': 'List out some of your Gigs'
      },
      'skills': {
        'name': 'skills',
        'id': 'Skills',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'volunteers': {
        'name': 'volunteers',
        'id': 'Volunteers',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'leadership': {
        'name': 'leadership',
        'id': 'Leadership',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'videos': {
        'name': 'videos',
        'id': 'Videos',
        'nullText': 'List out some of your education, courses you took and certifications'
      },
      'newmodule': {
        'name': 'newmodule',
        'id': 'Add New Module',
        'nullText': 'List out some of your education, courses you took and certifications'
      }
    }
  }),

  created () {
    // TODO load profile data from interceptor/http
    let context = require.context('../../assets/svg', false, /\.svg$/)
    this.avatar = context('./' + 'avatar.svg')
    this.favcolor = '#04a'
    this.name = 'Jane Shepard'
    this.aboutme = 'I am Commander Shepard and I approve of this message.'
    this.email = 'jane.shepard@gmail.com'
    this.address = 'Normandy, SSR4'
    this.dob = '2017, 14th May'
    this.phonenumber = '+200 9158248424'

    const cards = [
      { name: 'education', component: StuProfEditEdu },
      { name: 'workhistory', component: StuProfEditEdu },
      { name: 'gigsfreelances', component: StuProfEditEdu },
      { name: 'skills', component: StuProfEditEdu },
      { name: 'volunteers', component: StuProfEditEdu },
      { name: 'leadership', component: StuProfEditEdu },
      { name: 'videos', component: StuProfEditEdu },
      { name: 'newmodule', component: StuProfEditEdu }
    ]
    for (const i of cards) {
      this.infoCards[i.name].addClicked = () => {
        this.editDialog.name = i.name
        this.editDialog.component = i.component
        this.editDialog.model = true
      }
    }

    // Test purposes
    this.infoCards['education'].contents = [
      {
        component: StuInfocardContentIcontext,
        args: { title: 'Kathmandu University', date: '2014-8', level: 'Bachelors', subject: 'Business Arts' }
      },
      {
        component: StuInfocardContentIcontext,
        args: { title: 'Tribhuwan University', date: '2017-8', level: 'Masters', subject: 'Physics' }
      }
    ]

    // this.infoCards.education
    // this.infoCards = {
    //  'education': {
    //    name: 'education',
    //    nullText: 'List out some of your education, courses you took and certifications',
    //    addClicked: () => {
    //      this.editDialog.name = 'education'
    //      this.editDialog.component = StuProfEditEdu
    //      this.editDialog.model = true
    //    },
    //    dialogComponent: StuProfEditEdu,
    //    contents: [
    //      {
    //        component: StuInfocardContentIcontext,
    //        args: { title: 'Kathmandu University', date: '2014-8', level: 'Bachelors', subject: 'Business Arts' }
    //      },
    //      {
    //        component: StuInfocardContentIcontext,
    //        args: { title: 'Tribhuwan University', date: '2017-8', level: 'Masters', subject: 'Physics' }
    //      }
    //    ]
    //  },
    //  'workhistory': {
    //    'name': 'Work History',
    //    'nullText': 'List here the places you have worked before.',
    //    addClicked: () => { },
    //    contents: [
    //      {
    //        component: StuInfocardContentIcontext,
    //        args: { title: 'Starbucks', date: '2017-9-9', level: 'Manager', subject: 'Did literally nothing.' }
    //      }
    //    ]
    //  },
    //  'gigsfreelances': {
    //    'name': 'Gigs and Freelances',
    //    'nullText': 'List out some of your education, courses you took and certifications',
    //    addClicked: () => { }
    //  },
    //  'skills': {
    //    'name': 'Skills',
    //    'nullText': 'List out some of your education, courses you took and certifications',
    //    addClicked: () => { },
    //    contents: [
    //      {
    //        component: StuInfocardContentChips,
    //        args: { title: 'Technical Skills', data: [ 'Java', 'Acting', 'Mushroom', 'Assembly x86', 'R-lang', 'Documentation' ], color: 'blue' },
    //        onClick: (args) => {
    //          this.editDialog.component = StuProfEditSkills
    //          this.editDialog.preData = true
    //          console.log('data: ' + args)
    //          this.editDialog.data = args
    //          this.editDialog.model = true
    //        }
    //      },
    //      {
    //        component: StuInfocardContentChips,
    //        args: { title: 'Skills', data: [ 'Mushroom', 'Management' ], color: 'green' }
    //      },
    //      {
    //        component: StuInfocardContentChips,
    //        args: { title: 'Languages', data: [ 'Cow', 'Catcalling', 'German' ], color: 'pink' }
    //      }
    //    ]
    //  },
    //  'volunteers': {
    //    'name': 'Volunteers',
    //    'nullText': 'List out some of your education, courses you took and certifications',
    //    addClicked: () => { }
    //  },
    //  'leadership': {
    //    'name': 'Leadership',
    //    'nullText': 'List out some of your education, courses you took and certifications',
    //    addClicked: () => { }
    //  },
    //  'videos': {
    //    'name': 'Videos',
    //    'nullText': 'List out some of your education, courses you took and certifications',
    //    addClicked: () => { }
    //  },
    //  'newmodule': {
    //    'name': 'Add New Module',
    //    'nullText': 'List out some of your education, courses you took and certifications',
    //    addClicked: () => { }
    //  }
    // }
  },

  beforeDestroy () { },

  methods: {
    dialogEvent (event) {
      if (!event) {
        this.editDialog.component = null
      }
    },
    closeEditDialog () {
      console.log('closing')
      this.editDialog.model = false
    },
    onClickInfoCardItem (index, name, component, preData, data) {
      this.editDialog.index = index
      this.editDialog.name = name
      this.editDialog.component = component
      this.editDialog.preData = preData
      this.editDialog.data = data
      this.editDialog.model = true
    },
    /**
     * Preserves data for the dialog to use.
     */
    persist (data) {
      this.editDialog.data = data
    },
    addToInfoCard (name) {
      console.log(name)
      console.log(this.editDialog.name)
      // close dialog
      this.editDialog.model = false
      const obj =
        {
          component: StuInfocardContentIcontext,
          args: { title: 'Kathmandu University', date: '2017-8-19', level: 'Bachelors', subject: 'Business Arts' },
          onClick: () => {
            this.editDialog.name = 'education'
            this.editDialog.component = StuProfEditEdu
            this.editDialog.preData = false
            this.editDialog.model = true
          }
        }
      this.infoCards.education.contents.push(obj)
    },
    editInfoCard (event) {
      console.log('editing')
      console.log(this.editDialog.name)
      console.log(this.editDialog.index)
      console.log(event)

      Vue.set(this.infoCards[this.editDialog.name].contents[this.editDialog.index], 'args', event)
      console.log('changed')
      // this.infoCards[this.editDialog.name].contents.splice(this.editDialog.index, 0)
      // this.infoCards[this.editDialog.name].contents[this.editDialog.index] = {
      //   component: StuInfocardContentIcontext,
      //   args: { title: event.school, date: event.date, level: event.subject, subject: event.subject }
      // }
    }
  },

  components: {
    'stu-infocard-base': StuInfocardBase,
    'stu-infocard-content-icontext': StuInfocardContentIcontext,
    'stu-profile-billboard': StuProfileBoard,
    'stu-infocard-content-chips': StuInfocardContentChips,
    'stu-prof-edit-skills': StuProfEditSkills,
    'stu-prof-edit-edu': StuProfEditEdu
  }

}
</script>


<template lang="pug">
// -- main content
v-container(fluid).pa-0
  v-jumbotron(src="/static/doc-images/mountain.jpg")
  v-layout(justify-center align-start).xs-flex-col
    
    // -- profile bill board
    stu-profile-billboard(
      :name="name" 
      :aboutme="aboutme" 
      :email="email" 
      :address="address"
      :dob="dob"
      :phonenumber="phonenumber"
      :favcolor="favcolor"
    ).xs-full

    // -- info cards
    .info-card-container.xs-full.ml-3.mt-3
      // v-masonry 
      div(
          transition-duration="0.3s" 
          item-selector=".item"
        )
        div(v-for="(i, index) in infoCards" :key="i.name")
          // v-masonry-tile 
          stu-infocard-base(
              class="item" 
              :title="i.id" 
              :nullText="i.nullText" 
              :slotActive="i.contents"
              @onAddClicked="i.addClicked"
            ).info-card.mb-3.mr-3.pb-3.xs-full
            template(v-show="i.contents")
              template(v-for="(part, index) in i.contents")
                component(
                    :is="part.component" 
                    :args="part.args"
                    @click.native.stop="onClickInfoCardItem(index, i.name, i.dialogComponent, true, part.args)"
                  ).mt-3.mx-3
  //- dialog component for all editing options
  v-dialog(v-model="editDialog.model")
    component(
      :is="editDialog.component"
      :alive="editDialog.model"
      @input="dialogEvent"
      :prof-data="editDialog.data"
      @close="editDialog.model = false"
      @add="addToInfoCard($event)"
      @edit="editInfoCard($event)"
      @remove=""
    )

</template>


<style lang="stylus" scoped>
@import '../../assets/styles/_vars.styl'

// helps calculate when to wrap
_full-width = t-sidebar-w + (2 * t-infocard-w) + 20px + (t-spacer4 * 4)
_card-container-full-width  = 2 * (t-infocard-w) + (t-spacer4 * 2)
_name_container_height = 100px
_billboard_translate = -(t-spacer3 + t-spacer5 + t-avatar-lg/2 + _name_container_height/2)px

.info-card-container
  max-width _card-container-full-width
  min-width _card-container-full-width
.info-card
  max-width t-infocard-w
  min-width t-infocard-w

.profile-board
  transform translateY(_billboard_translate)
  transition all 1s

@media $display-breakpoints.xs-only
  .container
    padding-left 0 !important
    padding-right 0 !important
  .ml-3
    margin-left 0 !important

@media screen and (max-width: (_full-width - 150px))
  // forces the info-card container items to wrap in a single column
  .info-card-container
    max-width t-infocard-w
    min-width t-infocard-w
  .profile-board
    transform translateY(-10px)
</style>
