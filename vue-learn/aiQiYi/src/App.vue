<template>
  <div id="app">
    <!-- tab导航栏 -->
    <v-header></v-header>
  </div>
</template>

<script>
import header from "@/components/header"
export default {
  name: "App",

  components:{
    "v-header":header
  }
}
</script>

<style lang="stylus">
@import "./assets/css/function"
@font-face 
  font-family: 'iconfont'  /* project id 1280431 */
  src: url('//at.alicdn.com/t/font_1280431_41riqh2trid.eot')
  src: url('//at.alicdn.com/t/font_1280431_41riqh2trid.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1280431_41riqh2trid.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1280431_41riqh2trid.woff') format('woff'),
  url('//at.alicdn.com/t/font_1280431_41riqh2trid.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1280431_41riqh2trid.svg#iconfont') format('svg')

.iconfont
    font-family:"iconfont" !important
    font-size:16px
    font-style:normal
    -webkit-font-smoothing: antialiased
    -webkit-text-stroke-width: 0.2px
    -moz-osx-font-smoothing: grayscale
html,body
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparent
  background rgba(8, 5, 58, 0.9)
  color #fff
</style>
