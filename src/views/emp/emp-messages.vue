<script>
import MessageCard from '../../shared/components/message-card'

// TODO remove
const msg = [
  { title: 'Some Title', shortContent: 'Some content here.', type: 'mod', content: 'https://' },
  { title: 'Found an article you like', shortContent: 'This article is a pure ad.', type: 'blog', content: 'https://' },
  { title: 'Come Work fo us Dawg', shortContent: 'Imma wanna hire yo dog', type: 'employer', content: 'https://' },
  { title: 'Rejacted', shortContent: 'We dont like your attitude', type: 'employer', content: 'https://' },
  { title: 'Your account is wack', shortContent: 'How not to get wacked.', type: 'mod', content: 'https://' }
]

export default {
  name: 'emp-messages',

  data () {
    return {
      showModMails: true,
      showEmployerMails: true,
      showBlogsMails: true,
      selectedMailIndex: 0,
      dialog: false,
      msgs: msg
    }
  },

  computed: { },

  methods: {
    openDialog (index) {
      this.selectedMailIndex = index
      this.dialog = true
    }
  },

  components: {
    'message-card': MessageCard
  }
}
</script>


<template lang="pug">
v-content
  v-layout
  
// v-content
//   v-layout.container
//     v-layout(column md4 sm4 xs12).filter-contain
//       div(md8 sm10 xs12)
//         v-checkbox(:label="'Mod Mails'" v-model="showModMails")
//         v-checkbox(:label="'Employer Mails'" v-model="showEmployerMails")
//         v-checkbox(:label="'Blogs Mails'" v-model="showBlogsMails")
//       hr.mb-4
//       div(md8 sm10 xs12)
//         v-checkbox(:label="'Sent Messages'" v-model="showModMails")
//         v-checkbox(:label="'Student Messages'" v-model="showEmployerMails")
//     v-flex(lg4 md6 sm8 xs12).messages-contain
//       div.messages
//         // TODO replace with render
//         div(v-for="(i, index) in msgs" :key="i.title")
//           message-card(:type="i.type" :title="i.title" :content="i.shortContent" @click.native.stop="openDialog(index)")
//     v-flex(lg4 md2 xs0).empty
  // v-dialog(v-model="dialog")
    message-card(:type="this.msgs[selectedMailIndex].type" :title="this.msgs[selectedMailIndex].title" :content="this.msgs[selectedMailIndex].shortContent")
</template>


<style lang="stylus" scoped>
.filter-contain
  .filter
    // width 60%
.messages-contain
  .messages
    div
      _m = 16px
      margin _m _m 0 _m
@media screen and (max-width: 600px)
  .filter
    display flex
    flex-direction row !important
  .container
    flex-direction column
  .empty
    display none

</style>
