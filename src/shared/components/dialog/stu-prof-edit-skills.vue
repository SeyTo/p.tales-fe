<script>
/**
 * Dialog for skills editing in student profile view.
 */
export default {
  name: 'stu-prof-edit-skills',

  props: {
    'value': Boolean,
    'preData': Boolean,
    'data': Object,
    'profData': {
      default () {
        const data = []
        var _ = require('lodash/util')
        for (var i in _.range(3)) {
          data[i] = {
            title: '',
            data: ['nothing'],
            color: ''
          }
        }
        return data
      }
    }
  },

  data () {
    return {
      technicalSkills: this.profData && this.profData[0] ? this.profData[0].data : [],
      skills: this.profData && this.profData[1] ? this.profData[1].data : [],
      languages: this.profData && this.profData[2] ? this.profData[2].data : []
    }
  },

  computed: { },

  methods: {
    remove (item) {
      this.technicalSkills.splice(this.technicalSkills.indexOf(item), 1)
      this.technicalSkills = [...this.technicalSkills]
    },
    add () {
      this.$emit('edit', [ { title: 'technicalSkills', data: this.technicalSkills, color: 'blue' }, { title: 'skills', data: this.skills, color: 'green' }, { title: 'languages', data: this.languages, color: 'red' } ])
    },
    close () {

    }
  },

  components: { },

  mounted () { }

}
</script>


<template lang="pug">
v-card
  | {{ technicalSkills }}
  | {{ skills }}
  | {{ languages }}
  v-card-title.headline
    v-layout(align-center).pa-0
      | Education
      v-spacer
      v-btn(depressed fab icon small @click="close").ma-0
        v-icon close

  v-divider
  v-layout(column).pa-4
    v-select(
      v-model="technicalSkills"
      label="Technical Skills"
      chips
      tags
      preprend-icon="filter_list"
      append-icon=""
    )
      // TODO slot not working
      template(slot="selection" slot-scope="data")
        v-chip(
          :key="JSON.stringify(data.item)"
          close=""
          :selected="data.selected"
          @input="remove(data.item)"
          color="blue"
        )
          strong {{ data.item }} &nbsp;

    v-select(
      v-model="skills"
      label="Skills"
      chips
      tags
      preprend-icon="filter_list"
      append-icon=""
    )
      // TODO slot not working
      template(slot="selection" slot-scope="data")
        v-chip(
          :key="JSON.stringify(data.item)"
          close=""
          :selected="data.selected"
          @input="remove(data.item)"
          color="green"
        )
          strong {{ data.item }} &nbsp;

    v-select(
      v-model="languages"
      label="Languages"
      chips
      tags
      preprend-icon="filter_list"
      append-icon=""
    )
      // TODO slot not working
      template(slot="selection" slot-scope="data")
        v-chip(
          :key="JSON.stringify(data.item)"
          close
          :selected="data.selected"
          @input="remove(data.item)"
          color="red"
        )
          strong {{ data.item }} &nbsp;

  v-layout
    v-spacer
    v-btn(flat @click="add") Edit

</template>


<style lang="stylus" scoped>
.card__title
  position relative
  text-align center
  .close
    position absolute
    right 0
    top 0
</style>
