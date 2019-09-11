<template>
    <div class="siderbar" :class="{showSidebar:showSidebar}">
        <div class="menu" :class="{showbar:showSidebar}">
            <div class="top">
              <ul>
                <li>
                    <router-link to="message" @click="hidebar">
                        <i class="iconfont">&#xe64b;</i>
                        <span>消息中心</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="clothes" @click="hidebar">
                        <i class="iconfont">&#xe782;</i>
                        <span>皮肤中心</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="vip" @click="hidebar">
                        <i class="iconfont">&#xe78e;</i>
                        <span>会员中心</span>
                    </router-link>
                </li>
                 <li>
                    <router-link to="flow" @click="hidebar">
                        <i class="iconfont">&#xe79c;</i>
                        <span>流量包月</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="flow" @click="hidebar">
                        <i class="iconfont">&#xe79c;</i>
                        <span>流量包月</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="personal" @click="hidebar">
                        <i class="iconfont">&#xe790;</i>
                        <span>私人云盘</span>
                    </router-link>
                </li>
            </ul>
            </div>
            <div class="line">
            </div>
            <div class="middle">
                <ul>
                <li @click="hidebar">
                    <router-link to="settime" @click="hidebar">
                        <i class="iconfont">&#xe78f;</i>
                        <span>定时关闭</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="clock" @click="hidebar">
                        <i class="iconfont">&#xe79d;</i>
                        <span>音乐闹钟</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="kuishe" @click="hidebar">
                        <i class="iconfont">&#xe639;</i>
                        <span>蝰蛇音效</span>
                    </router-link>
                </li>
                 <li>
                    <router-link to="listenMusic" @click="hidebar">
                        <i class="iconfont">&#xe602;</i>
                        <span>听歌识曲</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="musicTool" @click="hidebar">
                        <i class="iconfont">&#xe78d;</i>
                        <span>音乐工具</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="drive" @click="hidebar">
                        <i class="iconfont">&#xe6fb;</i>
                        <span>驾驶模式</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="music" @click="hidebar">
                        <i class="iconfont">&#xe605;</i>
                        <span>个性彩铃</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="children" @click="hidebar">
                        <i class="iconfont">&#xe66c;</i>
                        <span>儿童专区</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="shop" @click="hidebar">
                        <i class="iconfont">&#xe616;</i>
                        <span>酷狗商城</span>
                    </router-link>
                </li>
            </ul>
            </div>
            <div class="line"></div>
            <div class="bottom">
                <div class="public">
                    <i class="iconfont">&#xe691;</i>
                    <span>通知栏歌词</span>
                </div>
                <div class="lined"></div>
                <div class="bottom-set">
                    <div class="set">
                    <i class="iconfont">&#xe603;</i>
                    <span>设置</span>
                    </div>
                    <div class="exit">
                    <i class="iconfont">&#xe75a;</i>
                    <span>退出登录</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div v-show="showSidebar" class="side_mask" @click="hidebar"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
           
        }
    },
    computed:{
        ...mapGetters([
            'showSidebar'
        ])
    },
    methods: {
        hidebar () {
            console.log('aaa')
            this.$store.dispatch('setShowSidebar',false)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.siderbar
    width 100%
 
    .showbar 
        transform translateX(px2rem(700px))
        transition 0.5s ease
        opacity 1
        z-index 1000
    .menu
        position absolute
        top 0
        left px2rem(-700px)
        transition 0.5s ease
        width px2rem(700px)
        background #013436  
        .top,.middle
            width 100%
            ul 
                li 
                    height px2rem(90px)
                    line-height px2rem(90px)
                    list-style none
                    a 
                        display block
                        padding-left px2rem(60px)
                        .iconfont 
                            font-size px2rem(36px)
                            vertical-align middle
                            opacity 0.8
                        span 
                            vertical-align middle
                            font-size px2rem(24px)
                            padding-left px2rem(20px)
                            color #fff
        .line
            border-bottom  1px solid 
            margin px2rem(40px) px2rem(60px)
            opacity 0.1     
        .bottom 
            .public
                padding-left px2rem(60px)
                margin-top px2rem(40px)
                margin-bottom px2rem(40px)
                .iconfont
                    font-size px2rem(36px)
                    margin-right px2rem(12px)
                    opacity 0.8
                span
                    font-size px2rem(24px)
                    vertical-align middle
        .lined
            border-bottom 1px solid #ffffff
            opacity 0.1
        .bottom-set
            display flex
            padding-bottom px2rem(30px)
            padding-left px2rem(60px)
            font-size px2rem(24px)
            margin-top px2rem(40px)
            .set
                flex 1
                span
                    padding-left px2rem(10px)
                .iconfont
                    opacity 0.8
            .exit
                flex 0 0 px2rem(180px)
                span 
                    padding-left px2rem(10px)
                .iconfont
                    opacity 0.8
    .side_mask
        width 100%
        position fixed
        margin 0 auto 
        top 0
        left 0
        bottom 0
        right 0
        background  rgba(0,0,0,0.3)
</style>
