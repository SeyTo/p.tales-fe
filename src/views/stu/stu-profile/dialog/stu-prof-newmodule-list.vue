<script>
import titlebar from '@/shared/components/card-comp/titlebar'

export default {
  name: 'stu-prof-newmodule-list',

  data: () => ({
    form: {
      model: false
    }
  }),

  computed: { },

  components: {
    'titlebar': titlebar
  }
}
</script>


<template lang="pug">
v-card
  titlebar(title="Something different for your profile" @close="$emit('close')")

  v-divider

  v-layout(row wrap)
    v-flex(xs12)
      v-expansion-panel
        v-expansion-panel-content
          div(slot="header") 
            v-list-tile()
              v-list-avatar.mr-3
                img(src="@/assets/svg/github-logo.svg" height="40")
              v-list-tile-content
                v-list-tile-title Add a Github link
                v-list-tile-sub-title Show off your coding projects.
          v-card.pa-3
            v-text-field(
              label="Paste your url here."
            )
            v-checkbox(
              label="Opt into JobDart's grouper project here."
            )
      v-expansion-panel
        v-expansion-panel-content
          div(slot="header")
            v-list-tile
              v-list-avatar.mr-3
                img(src="@/assets/svg/compose.svg" height="40")
              v-list-tile-content
                v-list-tile-title Add your own website
                v-list-tile-sub-title Direct link to your website.
          v-card.pa-3
            v-text-field(
              label="Paste your url here."
            )

</template>


<style lang="stylus" scoped>
</style>
