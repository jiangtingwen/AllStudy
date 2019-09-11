<template>
    <div class="top">
    <div class="aa">
        <router-link tag="div" to="" class="circle a">
            <div class="side side-loku">
                <i class="iconfont">&#xe620;</i>
            </div>
        </router-link>
        <p class="text">乐库</p>
    </div>
    <div class="aa">
        <router-link tag="div" class="circle b" to="">
            <div class="side side-songList">
                <i class="iconfont">&#xe78a;</i>
            </div>
        </router-link>
        <p class="text">歌单</p>
    </div>
    <div class="aa">
        <router-link tag="div" class="circle c" to="">
            <div class="side side-listenBooks">
                <i class="iconfont">&#xe644;</i>
            </div>
        </router-link>
        <p class="text">电台听书</p>
    </div>
    <div class="aa">
        <router-link tag="div" class="circle d" to="">
            <div class="side side-like">
                <i class="iconfont">&#xe627;</i>
            </div>
        </router-link>
        <p class="text">猜你喜欢</p>
    </div>
    <div class="aa" to="">
        <router-link tag="div" class="circle e" to="">
            <div class="side side-show">
                <i class="iconfont">&#xe654;</i>
            </div>
        </router-link>
        <p class="text">每日推荐</p>
    </div>
    <div class="aa six">
        <div class="circle f" to="">
        <i :class="{'icon-chevron__down':isDown,'icon-chevron__up':isUp}" @click="expend">
        </i>
        </div>
        <p class="text" @click="pull">收起</p>
    </div>
  </div>

</template>

<script>
export default {
    data () {
        return {
            isDown:false,
            isUp:true
        }
    },
    methods:{
        expend () {
            this.isDown = !this.isDown,
            this.isUp = !this.isUp
        },
        pull() {

        }
    }

}
</script>

<style lang="stylus">
@import '../assets/css/function';
.top
    display flex
    // padding px2rem(25px) px2rem(35px)
    flex-flow row wrap
    align-content flex-end           
    .aa 
        width 33% 
        display flex
        flex-direction column
        justify-content center
        align-items center
        // margin-right 100px   
        .circle
            width px2rem(120px)
            height px2rem(120px)
            border-radius 50%
            background #626b29
            position relative
            .side
                width px2rem(100px)
                height px2rem(100px) 
                border-radius 50%
                background #a9ad3d 
                position absolute
                top 8%
                left 8%
                position relative
                .iconfont
                    position absolute
                    left 18%
                    top 20%
                    font-size 25px
        .text
            margin-top 10px
            vertical-align middle
            margin 10px auto

        .b
            background #4c733d
            .side-songList
                background #75ac57
        .c
            background #366b74
            .side-listenBooks
                background #519fb9
        .d
            background #754f89
            .side-like
                background #bc6bc9
        .e 
            background #425878
            .side-show
                background #6476b5
        .f
            background #51a0a3 
            .icon-chevron__down
                z-index 1000
                width 10px
                height 10px
                border 50px solid #ffffff 
                display inline-block
                position absolute
                top 44%
                left 42%
                transform rotateZ(45deg)
                border-width 0 1px 1px 0
                box-sizing border-box
                transition transform 0.5s
            .icon-chevron__up
                z-index 1000
                width 10px
                height 10px
                position absolute
                left 42%
                top 44%
                border 50px solid #ffffff 
                display inline-block
                // transform rotateZ(45deg)
                border-width 0 1px 1px 0
                box-sizing border-box
                transition transform 0.5s
                transform rotateZ(-135deg)

        
   

</style>
