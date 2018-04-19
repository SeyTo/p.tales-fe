import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stores/index.js'

import { VueMasonryPlugin } from 'vue-masonry'

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
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

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
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
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
