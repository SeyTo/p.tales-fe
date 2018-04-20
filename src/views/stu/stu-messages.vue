<script>
import MessageCard from '../../shared/components/message-card'

export default {
  name: 'stu-messages',

  data () {
    return {
      showModMails: true,
      showEmployerMails: true,
      showBlogsMails: true
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
    v-flex(lg4 md6 sm7 xs12).messages-contain
      div.messages
        message-card(type="mod" title="Some Title" content="Some Content")
        message-card(type="blog" title="Some Blog" content="Some Content")
        message-card(type="employer" title="Imma Hire you NAW" content="Work fo me man.")
        message-card(type="mod" title="You got wrecked" content="How to get wrecked")
    v-flex(lg4 md2 xs1).empty
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
