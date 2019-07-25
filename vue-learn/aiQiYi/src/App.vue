<template>
  <div id="app">
    <!-- tab导航栏 -->
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <search></search>
    <router-view>
    </router-view>

  </div>
</template>

<script>
import header from "@/components/header"
import sideBar from "@/components/sideBar"
import search from "@/components/search"

export default {
  name: "App",

  components:{
    "v-header":header,
    "v-sidebar":sideBar,
    "search":search
  }
}
</script>

<style lang="stylus">
@import "./assets/css/function"
@font-face 
  font-family: "iconfont";  /* project id 1280431 */
  src: url("//at.alicdn.com/t/font_1280431_ca0c28ym0b.eot")
  src: url("//at.alicdn.com/t/font_1280431_ca0c28ym0b.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1280431_ca0c28ym0b.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1280431_ca0c28ym0b.woff") format("woff"),
    url("//at.alicdn.com/t/font_1280431_ca0c28ym0b.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1280431_ca0c28ym0b.svg#iconfont") format("svg")
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
