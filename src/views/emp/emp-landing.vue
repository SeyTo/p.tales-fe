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
v-container(fluid)
  v-slide-y-transition(mode="out-in") 
    v-layout(column align-center)
      img(src="@/assets/favicon.64.png" alt="Tales logo" class="my-5") 
      h1 Tales Employer Landing Page
</template>


<style lang="stylus" scoped>
</style>
