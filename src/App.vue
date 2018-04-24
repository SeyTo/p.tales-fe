<script>
export default {
  name: 'App'
}
</script>


<template lang="pug">
  v-app(light)

    // -- content start
    v-content
      router-view/
    // v-footer(app) 
      span &copy; 2018

</template>
