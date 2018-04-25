import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores/index.js'

import { VueMasonryPlugin } from 'vue-masonry'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import LoremIpsum from 'vue-lorem-ipsum'

import './assets/styles/main.styl'

import {
  Vuetify,
  VApp,
  VAvatar,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VBtnToggle,
  VIcon,
  VGrid,
  VToolbar,
  VParallax,
  VDialog,
  VCard,
  VTabs,
  VForm,
  VTextField,
  VSelect,
  VMenu,
  VExpansionPanel,
  VCheckbox,
  VJumbotron,
  VDivider,
  VDatePicker,
  VRadioGroup,
  VSubheader,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(KsVueScrollmagic)
Vue.use(LoremIpsum)
Vue.use(VueMasonryPlugin)
Vue.use(Vuetify, {
  components: {
    VApp,
    VAvatar,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VBtnToggle,
    VIcon,
    VGrid,
    VToolbar,
    VParallax,
    VDialog,
    VCard,
    VTabs,
    VForm,
    VTextField,
    VSelect,
    VExpansionPanel,
    VMenu,
    VCheckbox,
    VJumbotron,
    VDivider,
    VDatePicker,
    VRadioGroup,
    VSubheader,
    transitions
  },
  theme: {
    primary: '#4fc3f7',
    secondary: '#81d4fa',
    accent: '#fdd835',
    error: '#f44336',
    info: '#2196f4',
    success: '#4caf50',
    warning: '#ffeb3b'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
