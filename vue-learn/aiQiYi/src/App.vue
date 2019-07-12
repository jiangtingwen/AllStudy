<template>
  <div id="app">
    <!-- tab导航栏 -->
    <v-header></v-header>
    <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import header from "@/components/header"
import sideBar from "@/components/sideBar"
export default {
  name: "App",

  components:{
    "v-header":header,
    'v-sidebar':sideBar
  }
}
</script>

<style lang="stylus">
@import "./assets/css/function"
@font-face 
  font-family "iconfont"  /* project id 1280431 */
  src: url("//at.alicdn.com/t/font_1280431_xhyftm89ky.eot")
  src: url("//at.alicdn.com/t/font_1280431_xhyftm89ky.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1280431_xhyftm89ky.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1280431_xhyftm89ky.woff") format("woff"),
    url("//at.alicdn.com/t/font_1280431_xhyftm89ky.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1280431_xhyftm89ky.svg#iconfont") format("svg")




.iconfont
    font-family "iconfont" !important
    font-size 16px
    font-style normal
    -webkit-font-smoothing antialiased
    -webkit-text-stroke-width 0.2px
    -moz-osx-font-smoothing grayscale
html,body
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparent
  background #001718
  color #fff
</style>
