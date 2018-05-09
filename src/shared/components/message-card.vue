<script>

// TODO generalize this
const messageMeta = {
  mod: {
    color: 'blue',
    icon: 'favicon.svg'
  },
  employer: {
    color: 'yellow',
    icon: 'github-logo.svg'
  },
  blog: {
    color: 'red',
    icon: 'blogger.svg'
  }
}

export default {
  name: 'message-card',

  props: {
    type: {
      default: 'mod'
    },
    title: {
      default: ''
    },
    content: {
      default: ''
    },
    compact: {
      default: false
    }
  },

  data () {
    return {
    }
  },

  computed: {
    avatar () {
      let context = require.context('../../assets/svg/', false, /\.svg$/)
      let img = (this.type === 'employer')
                  ? messageMeta.employer.icon
                  : (this.type === 'blog')
                    ? messageMeta.blog.icon
                    : messageMeta.mod.icon
      return context('./' + img)
    },
    highlightColor () {
      return (this.type === 'employer')
                ? messageMeta.employer.color
                : (this.type === 'blog')
                  ? messageMeta.blog.color
                  : messageMeta.mod.color
    }
  },

  components: { }
}
</script>


<template lang="pug">
v-card(hover)
  .highlight(v-bind:style="{ 'background-color': highlightColor }")
  v-layout.pa-3
    .avatar
      img(:src="avatar")
    v-layout(column).messages.ml-3
      .title
        | {{ title }}
      .content
        | {{ content }}
    div.icons
      v-btn(icon small fab).ma-0
        v-icon close
      v-btn(icon small fab).ma-0
        img(src="../../assets/svg/archive.svg").smaller
      
  
</template>


<style lang="stylus" scoped>
.highlight
  height 2px
.avatar
  height 80px
.icons
  width 40px
  .smaller
    height 50%
  // img
  //   float left 
  //   height 24px
</style>
