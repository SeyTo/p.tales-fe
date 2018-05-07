<script>
export default {
  name: 'form-duallist',

  props: {
    'value': { defailt: false, type: Boolean },
    'list': Array,
    'title': String,
    'type': String
  },

  data: () => ({ }),

  computed: { },

  methods: {
    setSelect (val) {
      this.$emit('onSelected', { type: this.type, val: val })
    }
  },

  destroyed () {
  }

}
</script>

<template lang="pug">
v-dialog(lazy :value="value" @input="$emit('input', $event)")
  v-card.pa-3
    | {{ type }}
    v-text-field(hide-details label="title").mb-3
    v-layout(wrap)
      v-flex(v-for="i in list" v-bind:key="i").half
        v-btn(@click="setSelect(i)" flat) {{ i }}
    v-card-actions
      v-spacer
      v-btn(@click="value=false" flat) Done
</template>

<style lang="stylus" scoped>
.half
  min-width 50%
</style>

