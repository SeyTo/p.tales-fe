<script>

export default {
  name: 'emp-landing',

  data () {
    return { }
  },

  components: { }
}
</script>


<template lang="pug">
v-container(fluid).pa-0
  v-slide-y-transition(mode="out-in")
    div
      v-layout(align-center justify-center green).fill-va
        div.display-4
          img(src="@/assets/favicon.64.png" alt="Tales logo" class="my-5")
      v-layout(align-center justify-center).fill-va
        div.display-4
          img(src="@/assets/favicon.64.png" alt="Tales logo" class="my-5")
      v-layout(align-center justify-center blue).fill-va
        div.display-4
          img(src="@/assets/favicon.64.png" alt="Tales logo" class="my-5")
</template>


<style lang="stylus" scoped>
</style>
