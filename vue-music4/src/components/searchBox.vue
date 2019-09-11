
<template>
  <div class="search-box">
    <i class="iconfont iconfont-search">&#xe600;</i>
    <input type="text" ref="query" v-model="query" class="box" :placeholder="placeholder">
    <i class="iconfont iconfont-dismiss" v-show="query" @click="clear"></i>
  </div>
</template>

<script>
import { debounce } from '@/common/util'
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    },
    blur () {
      this.$refs.query.blur()
    }
  },
  created () {
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }))
  }
}
</script>
<style lang='stylus' scoped>
@import '../assets/css/function'
.search-box 
  display flex
  align-items center
  box-sizing border-box
  border-radius 20px
  width 100%
  padding 0 px2rem(8px)
  height px2rem(74px)
  background #34504f
  
  
  .iconfont-search 
    font-size 16px
    color #6b6a6a
  .box 
    flex 1
    margin 0 5px
    line-height px2rem(36px)
    background #34504f
    font-size 14px
    outline 0
    color #ffffff
    &:placeholder 
      color hsla(0, 0%, 100%,0.9)
  .iconfont-dismiss 
    font-size 20px
    margin-right px2rem(10px)
    color #6b6a6a
</style>
