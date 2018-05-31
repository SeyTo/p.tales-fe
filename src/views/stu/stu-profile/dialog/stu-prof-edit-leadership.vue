<script>
import titlebar from '@/shared/components/card-comp/titlebar'

export default {
  name: 'stu-prof-edit-leadership',

  data: () => ({ }),

  computed: { },

  components: {
    'titlebar': titlebar
  }
}
</script>


<template lang="pug">
div
  titlebar(title="Leaderships" @close="$emit('close')")
</template>


<style lang="stylus" scoped>
</style>
