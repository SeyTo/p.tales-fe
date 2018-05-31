<script>
import titlebar from '@/shared/components/card-comp/titlebar'

export default {
  name: 'stu-prof-edit-gigsnfreelance',

  data: () => ({ }),

  computed: { },

  components: {
    'titlebar': titlebar
  }
}
</script>


<template lang="pug">
div
  titlebar(title="Gigs & Freelances" @close="$emit('close')")
</template>


<style lang="stylus" scoped>
</style>
