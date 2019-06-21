<template>
    <div class="play" v-show="playList.length>0">
        <transition name="normal" @enter="enter" @after-enter="afterEnter"
         @leave="leave" @after-leave="afterLeave">

         <div class="normal-player" v-show="fullScreen">
             <div class="background">
                 <img width="100%" height="100%"
                  :src="(currentSong.al && currentSong.al.picUrl) 
                  || (currentSong.artists && currentSong.artists[0].img1v1Url)" alt="">
             </div>
             <!-- 播放页面的头部 -->
             <div class="top">
                 <div class="back" @click="back">
                     <i class="icon">&#xe8e2;</i>
                 </div>
                 <h1 class="title" v-html="currentSong.name"></h1>
                 <h2 class="subtitle" v-html="(currentSong.ar && currentSong.ar[0].name)
                  || (currentSong.artists && currentSong.artists[0].name)"></h2>
             </div>
             <!-- 播放页面的内容 -->


         </div>


        </transition>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.play
    z-index 150
    .normal-player
        position fixed
        top 0
        left 0
        bottom 0
        right 0
        z-index 150
        background-color rgb(8,5,58)
        .background
            position absolute
            left 0
            top 0
            width 100%
            height 100%
            z-index -1
            opacity 0.6
            filter  blur(20px)
        .top
            position relative
            margin-bottom 25px
            .back
                position absolute
                top 0
                left px2rem(12)
                z-index 50
                .icon
                    display block
                    height px2rem(100px)
                    line-height px2rem(100px)
                    padding 0 px2rem(30px)
                    font-size 22px
            .title
                width 70%
                margin 0 auto
                line-height px2rem(100px)
                text-align center
                text-overflow ellipsis
                white-space nowrap
                font-size 18px
                color #ffffff
            .subtitle
                line-height px2rem(40px)
                text-align center
                color #ffffff
                font-size 14px    

</style>
