<script>
import StuInfocardBase from './stu-prof-infocards/stu-infocard-base.vue'
import StuInfocardContentIcontext from './stu-prof-infocards/stu-infocard-content-icontext'
import StuProfileBoard from '@/shared/components/stu-profile-billboard'
import StuInfocardContentChips from './stu-prof-infocards/stu-infocard-content-chips'
import Vue from 'vue'

// dialogs
import StuProfEditSkills from '@/shared/components/dialog/stu-prof-edit-skills'
import StuProfEditEdu from '@/shared/components/dialog/stu-prof-edit-education'
import StuProfEditWorkHistory from './stu-profile/dialog/stu-prof-edit-workhistory'

export default {
  name: 'student-profile',

  props: { },

  data: () => ({
    // these v, tile, masonry only solves the error of undefined data due to plugin
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
      education: {
        name: 'education',
        id: 'Education',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditEdu
      },
      workhistory: {
        name: 'workhistory',
        id: 'Work History',
        nullText: 'List here the places you have worked before.',
        dialogComponent: StuProfEditWorkHistory
      },
      gigsfreelances: {
        name: 'gigsfreelances',
        id: 'Gigs & Freelances',
        nullText: 'List out some of your Gigs',
        dialogComponent: StuProfEditWorkHistory
      },
      skills: {
        name: 'skills',
        id: 'Skills',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditWorkHistory
      },
      volunteers: {
        name: 'volunteers',
        id: 'Volunteers',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditWorkHistory
      },
      leadership: {
        name: 'leadership',
        id: 'Leadership',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditWorkHistory
      },
      videos: {
        name: 'videos',
        id: 'Videos',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditWorkHistory
      },
      newmodule: {
        name: 'newmodule',
        id: 'Add New Module',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditWorkHistory
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

    for (const i in this.infoCards) {
      this.infoCards[i].addClicked = () => {
        this.editDialog.name = this.infoCards[i].name
        this.editDialog.component = this.infoCards[i].dialogComponent
        this.editDialog.model = true
        // undefined will set default value in their component
        this.editDialog.data = undefined
      }
    }

    // Test purposes
    this.infoCards['education'].contents = [
      {
        component: StuInfocardContentIcontext,
        args: { title: 'Kathmandu University', item1: '2014-8', item2: 'Bachelors', item3: 'Business Arts' }
      },
      {
        component: StuInfocardContentIcontext,
        args: { title: 'Tribhuwan University', item1: '2017-8', item2: 'Masters', item3: 'Physics' }
      }
    ]

    this.infoCards['workhistory'].contents = [
      {
        component: StuInfocardContentIcontext,
        args: { title: 'StarBucks', item1: 'Barista', item2: '2017-4', item3: 'Did literally nothing...' }
      }
    ]

    this.infoCards['gigsfreelances'].contents = [
      {
        component: StuInfocardContentIcontext,
        args: { title: 'Bass Jam', item1: 'Bassis', item2: '2017-4', item3: 'Played Bass' }
      }
    ]

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
      this.editDialog.model = false
      this.editDialog.component = null
    },

    onClickInfoCardItem (index, name, component, preData, data) {
      this.editDialog.index = index
      this.editDialog.name = name
      this.editDialog.component = component
      this.editDialog.preData = preData
      this.editDialog.data = data
      this.editDialog.model = true
      console.dir(data)
    },

    /**
     * Preserves data for the dialog to use.
     */
    persist (data) {
      this.editDialog.data = data
    },

    /**
     * General clicking action for the card-content-items.
     */
    cardItemOnClick: (that, name, component, preData) => {
      that.editDialog.name = name
      that.editDialog.component = component
      that.editDialog.preData = preData
      that.editDialog.model = true
    },

    redrawMasonry () {
      Vue.nextTick().then(() => {
        this.$redrawVueMasonry()
      })
    },

    addToInfoCard (name) {
      console.log('adding')
      const item = {
        component: StuInfocardContentIcontext,
        args: { title: name.title, item1: name.date, item2: name.level, item3: name.subject },
        onClick: this.cardItemOnClick(this, 'education', StuProfEditEdu, false)
      }
      this.infoCards.education.contents.push(item)
      this.closeEditDialog()
      this.redrawMasonry()
    },

    editInfoCard (data) {
      Vue.set(this.infoCards[this.editDialog.name].contents[this.editDialog.index], 'args', data)
      this.infoCards[this.editDialog.name].contents.splice(this.editDialog.index, 0)
      this.infoCards[this.editDialog.name].contents[this.editDialog.index] = {
        component: StuInfocardContentIcontext,
        args: { title: data.title, item1: data.date, item2: data.level, item3: data.subject }
      }
      this.closeEditDialog()
      this.redrawMasonry()
    },

    removeInfoCard () {
      console.log('remove')
      // Vue.delete(this.infoCards[this.editDialog.name], 'contents[this.editDialog.index]')
      this.infoCards[this.editDialog.name].contents.pop(this.editDialog.index)
      this.closeEditDialog()
      this.redrawMasonry()
    }
  },

  watch: { },

  components: {
    'stu-infocard-base': StuInfocardBase,
    'stu-infocard-content-icontext': StuInfocardContentIcontext,
    'stu-profile-billboard': StuProfileBoard,
    'stu-infocard-content-chips': StuInfocardContentChips,
    'stu-prof-edit-skills': StuProfEditSkills,
    'stu-prof-edit-edu': StuProfEditEdu,
    'stu-prof-edit-workhistory': StuProfEditWorkHistory
  }

}
</script>


<template lang="pug">
// -- main content
v-container(fluid).pa-0
  v-jumbotron(src="/static/doc-images/mountain.jpg")
    v-layout
      v-btn(fab icon absolute right bottom).white.mb-5
        v-icon edit

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
      div(
          v-masonry=""
          :ref="'mason'"
          transition-duration="0.3s" 
          item-selector=".item"
        )
        div(v-for="(i, index) in infoCards" :key="i.name")
          stu-infocard-base(
              v-masonry-tile=""
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
  // @input=closeEditDialog (expected=false) because, when dialog closes you also need to nullify component
  v-dialog(lazy v-model="editDialog.model" @input="closeEditDialog")
    component(
      :is="editDialog.component"
      @input="dialogEvent"
      :prof-data="editDialog.data"
      @close="closeEditDialog"
      @add="addToInfoCard($event)"
      @edit="editInfoCard($event)"
      @remove="removeInfoCard()"
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
