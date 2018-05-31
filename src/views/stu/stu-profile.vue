<script>
import StuInfocardBase from './stu-prof-infocards/stu-infocard-base.vue'
import StuInfocardContentIcontext from './stu-prof-infocards/stu-infocard-content-icontext'
import StuProfileBoard from '@/shared/components/stu-profile-billboard'
import StuInfocardContentChips from './stu-prof-infocards/stu-infocard-content-chips'
import StuProfNewModuleList from './stu-profile/dialog/stu-prof-newmodule-list'
import StuProfBasicInfo from './stu-profile/dialog/stu-prof-basicinfo'
import Vue from 'vue'

// dialogs
import StuProfEditSkills from '@/shared/components/dialog/stu-prof-edit-skills'
import StuProfEditEdu from '@/shared/components/dialog/stu-prof-edit-education'
import StuProfEditWorkHistory from './stu-profile/dialog/stu-prof-edit-workhistory'
import StuProfEditVideo from './stu-profile/dialog/stu-prof-edit-video'
import StuProfEditGigsNFreelance from './stu-profile/dialog/stu-prof-edit-gigsnfreelance'
import StuProfEditVolunteers from './stu-profile/dialog/stu-prof-edit-volunteer'
import StuProfEditLeadership from './stu-profile/dialog/stu-prof-edit-leadership'

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
    basicEdit: {
      model: false,
      data: null
    },
    currentDialogComponent: null,
    dialogModel: false,
    infoCards: {
      education: {
        name: 'education',
        id: 'Education',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditEdu,
        listComponent: StuInfocardContentIcontext
      },
      workhistory: {
        name: 'workhistory',
        id: 'Work History',
        nullText: 'List here the places you have worked before.',
        dialogComponent: StuProfEditWorkHistory,
        listComponent: StuInfocardContentIcontext
      },
      gigsfreelances: {
        name: 'gigsfreelances',
        id: 'Gigs & Freelances',
        nullText: 'List out some of your Gigs',
        dialogComponent: StuProfEditGigsNFreelance,
        listComponent: StuInfocardContentIcontext
      },
      skills: {
        name: 'skills',
        id: 'Skills',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditSkills,
        listComponent: StuInfocardContentChips
      },
      volunteers: {
        name: 'volunteers',
        id: 'Volunteers',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditVolunteers,
        listComponent: StuInfocardContentIcontext
      },
      leadership: {
        name: 'leadership',
        id: 'Leadership',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditLeadership,
        listComponent: StuInfocardContentIcontext
      },
      videos: {
        name: 'videos',
        id: 'Videos',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfEditVideo,
        listComponent: StuInfocardContentIcontext
      },
      newmodule: {
        name: 'newmodule',
        id: 'Add New Module',
        nullText: 'List out some of your education, courses you took and certifications',
        dialogComponent: StuProfNewModuleList,
        listComponent: null
      }
    }
  }),

  created () {
    // TODO load profile data from interceptor/http
    // Example payload from server
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
        this.editDialog.data = this.processData(this.editDialog.name, null)
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

    this.infoCards['skills'].contents = [
      {
        component: StuInfocardContentChips,
        args: {
          title: 'Techinical Skills', data: [ 'Java', 'Bargaining' ], color: 'blue'
        }
      }
    ]

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
    processArgs (args) {
      switch (this.editDialog.name) {
        case 'education':
          return { title: args.title, item1: args.date, item2: args.level, item3: args.subject }
        case 'workhistory':
          return { title: args.name, item1: args.position, item2: args.start, item3: args.details }
        case 'skills':
          return { title: args.title, data: args.data, color: args.color }
        default:
          return { }
      }
    },

    /**
     * Packs args data into suitable form to be used by respective dialog handlers.
     * null args means that new item is supposed to be added.
     * @param {string} type 'edit' or 'add'
     * @param {object} args data from infoCards.component[x].args
     */
    processData (name, content) {
      if (name === 'skills') {
        // this is special exception, when clicking on new/edit, all items are shown
        // unlike the others that show the only one that is clicked.
        const data = []
        // packs into array with original args
        for (let i in this.infoCards[name].contents) {
          data.push(this.infoCards[name].contents[i].args)
        }
        return data.length === 0 ? undefined : data
      }
      // no content means that new item is supposed to be added
      if (!content || content.length === 0) {
        // should be 'undefined' else the component's 'props' will not assign itself default values
        return undefined
      } else {
        return content.args
      }
    },

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
      this.editDialog.data = this.processData(this.editDialog.name, this.infoCards[name].contents[index])
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
    cardItemOnClick: (that, name, dialogComponent, preData) => {
      that.editDialog.name = name
      that.editDialog.component = dialogComponent
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
      const args = this.processArgs(name)
      const item = {
        component: this.infoCards[this.editDialog.name].listComponent,
        args: args,
        onClick: this.cardItemOnClick(this, this.editDialog.name, this.editDialog.component, false)
      }
      this.infoCards[this.editDialog.name].contents.push(item)
      this.closeEditDialog()
      this.redrawMasonry()
    },

    editInfoCard (data) {
      // passing an array would mean that you want to clear the list and then add a new list to it.
      if (Array.isArray(data)) {
        this.infoCards[this.editDialog.name].contents = []
        for (var i of data) {
          const item = {
            component: StuInfocardContentChips,
            args: this.processArgs(i)
          }
          this.infoCards[this.editDialog.name].contents.push(item)
        }
      } else {
        this.infoCards[this.editDialog.name].contents.splice(this.editDialog.index, 0)
        this.infoCards[this.editDialog.name].contents[this.editDialog.index] = {
          component: StuInfocardContentIcontext,
          args: this.processArgs(data)
        }
      }

      // Vue.set(this.infoCards[this.editDialog.name].contents[this.editDialog.index], 'args', data)
      this.closeEditDialog()
      this.redrawMasonry()
    },

    editBasicInfo (data) {
      this.name = data.name
      this.email = data.email
      this.dob = data.dob
      this.address = data.address
      this.aboutme = data.aboutme
      this.favcolor = data.favcolor
      // TODO add social
      this.basicEdit.model = false
    },

    removeInfoCard () {
      console.log('remove')
      // Vue.delete(this.infoCards[this.editDialog.name], 'contents[this.editDialog.index]')
      this.infoCards[this.editDialog.name].contents.pop(this.editDialog.index)
      this.closeEditDialog()
      this.redrawMasonry()
    },

    basicEditDialog () {
      console.log('opening')
      this.basicEdit.model = true
    },

    closeBasicEdit () {
      this.basicEdit.model = false
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
    'stu-prof-edit-workhistory': StuProfEditWorkHistory,
    'stu-prof-newmodule-list': StuProfNewModuleList,
    'stu-prof-basicinfo': StuProfBasicInfo,
    'stu-prof-edit-video': StuProfEditVideo,
    'stu-prof-edit-gigsnfreelance': StuProfEditGigsNFreelance,
    'stu-prof-edit-volunteer': StuProfEditVolunteers,
    'stu-prof-edit-leadership': StuProfEditLeadership
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
      @edit="basicEditDialog"
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

  v-dialog(lazy v-model="basicEdit.model" @input="closeBasicEdit")
    stu-prof-basicinfo(
      :pName="name"
      :pAddress="address"
      :pEmail="email"
      :pPhone="phonenumber"
      :pDob="dob"
      :pAboutme="aboutme"
      :pColor="favcolor"
      :pSocial="[]"
      @edit="editBasicInfo($event)"
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
