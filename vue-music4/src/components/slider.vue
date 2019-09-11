<template>
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
          <router-link class="a" to="">
            <img :src='img'>
          </router-link>
        </li>
      </transition-group>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
      @click="change(index)" :key="index"></span>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data () {
    return {
      timer: null, //定时器
      mark: 0, //比对图片索引的变量
      imgArray: [//图片路径
        require('../static/images/1.jpg'),
        require('../static/images/2.jpg'),
        require('../static/images/3.jpg'),
        require('../static/images/4.jpg'),
        require('../static/images/5.jpg'),
        require('../static/images/6.jpg'),
        require('../static/images/7.jpg'),
        require('../static/images/8.jpg'),
        require('../static/images/9.jpg'),
        require('../static/images/10.jpg'),
        require('../static/images/11.jpg'),
        require('../static/images/12.jpg'),  
      ]
    }
  },
  methods: {
    autoPlay () {
      this.mark++;
      if (this.mark === 12) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      console.log('1')
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    }
  },
  created () {
    this.play()
  }
}
</script>
<style lang="stylus" scoped>
@import "../assets/css/function"
.slide 
  width px2rem(800px)
  height px2rem(300px)
  margin 20px auto
  overflow hidden
  position relative
  .slideshow 
    width 100%
    height 100%
    ul
      width 100%
      height 100%
      li 
        width 100%
        position absolute
        a
          display inline-block
          width 100%
          img 
            width px2rem(800px)
            height px2rem(300px) 
  .bar 
    position absolute
    width 100%
    bottom 10px
    margin 0 auto
    z-index 10
    text-align center
    span 
      width 7px
      height 7px
      border-radius 50%
      background white
      display inline-block
      margin-right 10px
    .active 
      background red !important
  
  .image-enter-active 
    transform translateX(0)
    transition all 1.5s ease
  
  .image-leave-active 
    transform translateX(-100%)
    transition all 1.5s ease
  
  .image-enter 
    transform translateX(100%)
  
  .image-leave 
    transform translateX(0)
  

</style>
