<template>
  <div id="app">
    <!-- 头部 header -->
    <TheHeader></TheHeader>
    <div class="content">
      <keep-alive>
    <router-view/>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader'
export default {
  name: 'App',
  components:{
    TheHeader
  }
}
</script>
<style lang="stylus">
@font-face 
  font-family "iconfont"  /* project id 1356465 */
  src: url("//at.alicdn.com/t/font_1356465_ze57ysdcuo.eot")
  src: url("//at.alicdn.com/t/font_1356465_ze57ysdcuo.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1356465_ze57ysdcuo.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1356465_ze57ysdcuo.woff") format("woff"),
    url("//at.alicdn.com/t/font_1356465_ze57ysdcuo.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1356465_ze57ysdcuo.svg#iconfont") format("svg")



.iconfont 
  font-family "iconfont" !important
  font-size 16px
  font-style normal
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale 

.content
  position absolute
  top 56px
  bottom 0
  width 100%

</style>
