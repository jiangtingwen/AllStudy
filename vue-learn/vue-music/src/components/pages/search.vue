<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 搜索框 -->
      <v-search-box @query="onQueryChange"></v-search-box>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <v-scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div>
          <!-- 热门搜索 -->
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index" @click="addQuery(item.first)">
                <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
          <!-- 搜索历史 -->
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="showConfirm">
                <i class="icon">&#xe612;</i>
              </span>
            </h1>
            <!-- 搜索历史列表 -->
            <v-search-list></v-search-list>
          </div>
        </div>
      </v-scroll>
    </div>
    <!-- 搜索结果 -->
    <div class="search-result" v-show="query" ref="searchResult">
      <v-suggest :query="query"></v-suggest>
    </div>
  </div>
</template>

<script>
import searchBox from '../searchBox'
import scroll from '../scroll'
import searchList from '../searchList'
import suggest from '../suggest'
export default {
  data () {
    return {
      query: '',
      searchHistory: 'mk',
      hotKey: [
        {first: '许嵩新歌发送'},
        {first: '许嵩新歌发送'},
        {first: '许嵩新歌发送'},
        {first: '五月天新歌发送'},
        {first: '许嵩新歌发送'}
      ]
    }
  },
  components: {
    'v-search-box': searchBox,
    'v-scroll': scroll,
    'v-search-list': searchList,
    'v-suggest': suggest
  },
  methods: {
    showConfirm () {

    },
    onQueryChange (query) {
      this.query = query
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/function"
.search
  overflow hidden
  &-box-wrapper
    margin px2rem(40px)
  .shortcut-wrapper
    position fixed
    top px2rem(360px)
    bottom 0
    width 100%
    .shortcut
      height 100%
      overflow hidden
      .hot-key
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title
          margin-bottom px2rem(40px)
          font-size 14px
          color hsla(0, 0%, 100%, 0.5)
        .item
          display inline-block
          padding px2rem(10px) px2rem(20px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 6px 
          font-size 14px
          color hsla(0, 0%, 100%, 0.3)
          background #2f3054 
      .search-history
        position relative
        margin 0 px2rem(40px)
        .title
          display flex
          align-items center
          font-size 14px 
          height px2rem(80px)
          color hsla(0, 0%, 100%, 0.5)
          .text
            flex 1 
          .clear
            .icon   
              font-size 18px
              color hsla(0, 0%, 100%, 0.3)     
</style>
