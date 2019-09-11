<template>
  <div class="header">
    <div class="logo" @showUp="show">
      <i class="back"/>
    </div>
    <div class="tabs">
      <div class="item">
        <RouterLink to="/recommend">首页</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/category">分类</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/rank">榜单</RouterLink>
      </div>
      <div class="item">
        <RouterLink to="/search">搜索</RouterLink>
      </div>
    </div>
    <div class="user" @click="$router.push('/user')">
      <i class="iconfont icon-user">&#xe606;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  methods:{
    show() {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
 $gray = #bbb
 $theme-color = #1c2635
  .header
    position fixed
    display flex
    z-index 999
    width 100%
    height 56px
    line-height 56px
    color: $gray
    background $theme-color
    .logo
      width 25%
      padding 15px
      box-sizing border-box
      .back
        display block
        height 100%
        background url('../common/images/logo.png') no-repeat center
        background-size contain
    .tabs
      display flex
      flex 1
      font-size 17px
      .item
        flex 1
        text-align center
        a
          height 56px
          color: $gray
          display inline-block
          box-sizing border-box
    .user
      width 15%
      text-align center
      .icon-user
        font-size 25px
    .router-link-active
      font-weight: 700
      color #fff!important
      border-bottom: 3px solid #fff
      transition 0.8s 
</style>
