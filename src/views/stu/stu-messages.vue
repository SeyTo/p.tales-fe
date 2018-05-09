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
  name: 'stu-messages',

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

  methods: {
    openDialog (index) {
      this.selectedMailIndex = index
      this.dialog = true
    }
  },

  computed: { },

  components: {
    'message-card': MessageCard
  }

}
</script>


<template lang="pug">
v-content
  v-layout.container
    v-layout(md4 sm5 xs12 justify-end).filter-contain
      v-flex(md8 sm10 xs12).filter
        v-checkbox(:label="'Mod Mails'" v-model="showModMails")
        v-checkbox(:label="'Employer Mails'" v-model="showEmployerMails")
        v-checkbox(:label="'Blogs Mails'" v-model="showBlogsMails")
    v-flex(lg5 md6 sm7 xs12).messages-contain
      div.messages
        // TODO replace with render
        div(v-for="(i, index) in msgs" :key="i.title")
          message-card(:type="i.type" :title="i.title" :content="i.shortContent" @click.native.stop="openDialog(index)")
    v-flex(lg4 md2 xs1).empty
  v-dialog(v-model="dialog")
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
@media screen and (max-width: 460px)
  .filter
    display flex
    flex-direction row !important
  .container
    flex-direction column
  .empty
    display none
</style>
