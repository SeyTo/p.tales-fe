<script>
import titlebar from '@/shared/components/card-comp/titlebar'

export default {
  name: 'stu-prof-edit-video',

  data: () => ({ }),

  computed: { },

  components: {
    'titlebar': titlebar
  }
}
</script>


<template lang="pug">
v-card
  titlebar(title="Videos and Blogs" @close="$emit('close')")
</template>


<style lang="stylus" scoped>
</style>
