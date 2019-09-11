
<template>
  <div id="app">
    <!-- 头部header -->
    <v-header>
     
    </v-header>
    <!-- tab -->
    
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- play -->
    <!-- sidebar -->
    <v-sidebar></v-sidebar>
    <v-play></v-play>
  </div>
</template>

<script>
import header from '@/components/header'
// import tab from '@/components/tab'
import sidebar from '@/components/sidebar'
import play from '@/components/play'
export default {
  name: 'App',
  components: {
    'v-header': header,
    // 'v-tab': tab,
    'v-sidebar': sidebar,
    'v-play': play
  }
}
</script>
<style lang="stylus">
@import "./assets/css/function"
@font-face 
  font-family "iconfont" /* project id 1280431 */
  src url("//at.alicdn.com/t/font_1280431_eapm6fi8vpi.eot");
  src url("//at.alicdn.com/t/font_1280431_eapm6fi8vpi.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1280431_eapm6fi8vpi.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1280431_eapm6fi8vpi.woff") format("woff"),
    url("//at.alicdn.com/t/font_1280431_eapm6fi8vpi.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1280431_eapm6fi8vpi.svg#iconfont") format("svg")


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
  #app
    overflow-x hidden
  
</style>
