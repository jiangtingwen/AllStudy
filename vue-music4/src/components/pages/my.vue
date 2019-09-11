<template>
    <div class="container">
        <div class="top">
            <div class="avatal">
                <img src="../../static/avatal.jpg" alt="">
            </div>
            <div class="message">
                <div class="message-up">
                    <span class="name">理想的黑与白</span>
                    <div class="vip">
                        开通会员
                    </div>
                </div>
                <div class="message-down">
                    <span class="level">LV.8</span>
                    <span class="time">听歌68960分钟</span>
                    <span class="id">身份认证</span>
                </div>
            </div>
            <div class="Msg">
                <i class="iconfont">&#xea0c;</i>
            </div>
        </div>
        <div class="line"></div>
        <div class="middle">
            <router-link tag="div" class="muisc localMusic" to="localMusic">
                <i class="iconfont">&#xe799;</i>
                <p>本地音乐</p>
                <p>0</p>
            </router-link>
            <router-link tag="div"  class="muisc myCollect" to="myCollect">
                <i class="iconfont">&#xe656;</i>
                <p>我的收藏</p>
                <p>22</p>
            </router-link>
            <router-link tag="div" class="muisc download" to="download">
                <i class="iconfont">&#xe636;</i>
                <p>下载</p>
                <p>0</p>
            </router-link>
            <router-link tag="div" class="muisc playRecent" to="playRecent">
                <i class="iconfont">&#xe7c9;</i>
                <p>最近播放</p>
                <p>665</p>
            </router-link>
        </div>
        <div class="bottom">
            <router-link tag="div" class="side musicCircle" to="">
                <span>音乐圈</span>
                <i class="iconfont iconfont-music">&#xe604;</i>
            </router-link>
            <div class="line"></div>
             <router-link tag="div" class="side singCircle" to="">
                <span>k歌圈</span>
                <i class="iconfont">&#xe604;</i>
            </router-link>
            <div class="line"></div>
             <router-link tag="div" class="side createSongList" to=""> 
                <span>自建歌单</span>
                <i :class="{'icon-chevron__down':isDown,'icon-chevron__up':isUp}" @click="expend">
                </i>
                <i class="iconfont iconfont-pull">&#xe789;</i>
                <i class="iconfont leadinSongList">&#xe652;</i>
                <i class="iconfont iconfontAdd">&#xe61f;</i>
            </router-link>
            <div class="line"></div>
             <router-link tag="div" class="side popularize" to="">
                <span>推广</span>
                <i class="iconfont">&#xe604;</i>
            </router-link>
        </div>
        <!-- <div class="setMyTop">
            自定义我的首页
        </div> -->
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
        
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/function"
.container
    width 100%
    margin-top px2rem(19px)
    .top
        display flex
        width 100%
        padding px2rem(20px) px2rem(29px)
        position relative
        .avatal
            width px2rem(78px)
            height px2rem(78px)
            margin-right px2rem(20px)
            img 
                width 100%
                height 100%
                border-radius 50%
        .message
            margin-top px2rem(13px)
            .message-up
                position relative
                .name
                    margin-right px2rem(20px)
                    font-size 12px
                .vip 
                    font-size 8px                
                    position absolute
                    right 43px
                    top 4px
                    width px2rem(110px)
                    text-align center
                    height 12px
                    color #f6e96f
                    border-radius 10px      
                    border 1px solid #f6e96f
            .message-down
                margin-top px2rem(12px)
                position relative
                .level
                    font-size 10px
                    border-radius 2px
                    color #f6e96f
                    border 1px solid #f6e96f
                    text-align center
                    vertical-align middle
                    line-height 10px
                    margin-right px2rem(12px)
                .time
                    font-size 12px
                    opacity 0.7
                    margin-right px2rem(15px)
                .id 
                    background-color #0bd4e5
                    font-size 12px
                    border-radius 10px
                    text-align center
        .Msg
            position absolute
            right 50px
            top 20px
            width px2rem(40px)
            height 18px
            opacity 0.7
            .iconfont 
                color #f6e96f
                font-size 20px
    .line
        border-bottom   1px solid #ffffff
        opacity 0.1  
        width 100%          
    .middle
        width 100%
        display flex
        padding px2rem(24px) 0
        .muisc
            font-size 12px
            flex 1
            text-align center
            line-height 20px
            .iconfont 
                color #b9faf7 
                font-size 20px
    .bottom
        margin-top px2rem(63px)
        padding-left px2rem(16px)
        .side
            font-size 12px
            opacity 0.9
            margin-bottom px2rem(26px)
            margin-top px2rem(26px)
            .icon-chevron__down
                z-index 1000
                width 7px
                height 7px
                border 1px solid yellow 
                opacity 0.3
                display inline-block
                transform rotateZ(45deg)
                border-width 0 1px 1px 0
                box-sizing border-box
                transition transform 0.5s
                margin-left 5px
                margin-bottom 3px
            .icon-chevron__up
                z-index 1000
                width 7px
                height 7px
                border 1px solid yellow 
                opacity 0.3
                display inline-block
                // transform rotateZ(45deg)
                border-width 0 1px 1px 0
                box-sizing border-box
                transition transform 0.5s
                margin-left 5px
                margin-bottom 3px
                transform rotateZ(-135deg)
            .iconfont
                color yellow
                font-size 10px
                opacity 0.3
                position absolute
                right px2rem(22px)
            .iconfont-pull
                right 5.466667rem
            .leadinSongList
                right 52px
       
</style>
