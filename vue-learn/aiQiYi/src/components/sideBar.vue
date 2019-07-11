<template>
    <div class="siderbar">
        <div class="menu">
            <div class="top">
              <ul>
                <li @click="hideBar">
                    <router-link to="message" @click="hideBar">
                        <i class="iconfont">&#xe64b;</i>
                        <span>消息中心</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="clothes" @click="hideBar">
                        <i class="iconfont">&#xe782;</i>
                        <span>皮肤中心</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="vip" @click="hideBar">
                        <i class="iconfont">&#xe78e;</i>
                        <span>会员中心</span>
                    </router-link>
                </li>
                 <li @click="hideBar">
                    <router-link to="flow" @click="hideBar">
                        <i class="iconfont">&#xe79c;</i>
                        <span>流量包月</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="flow" @click="hideBar">
                        <i class="iconfont">&#xe79c;</i>
                        <span>流量包月</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="personal" @click="hideBar">
                        <i class="iconfont">&#xe790;</i>
                        <span>私人云盘</span>
                    </router-link>
                </li>
            </ul>
            </div>
            <div class="middle">
                <ul>
                <li @click="hideBar">
                    <router-link to="settime" @click="hideBar">
                        <i class="iconfont">&#xe78f;</i>
                        <span>定时关闭</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="clock" @click="hideBar">
                        <i class="iconfont">&#xe79d;</i>
                        <span>音乐闹钟</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="kuishe" @click="hideBar">
                        <i class="iconfont">&#xe639;</i>
                        <span>蝰蛇音效</span>
                    </router-link>
                </li>
                 <li @click="hideBar">
                    <router-link to="listenMusic" @click="hideBar">
                        <i class="iconfont">&#xe602;</i>
                        <span>听歌识曲</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="musicTool" @click="hideBar">
                        <i class="iconfont">&#xe78d;</i>
                        <span>音乐工具</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="drive" @click="hideBar">
                        <i class="iconfont">&#xe6fb;</i>
                        <span>驾驶模式</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="music" @click="hideBar">
                        <i class="iconfont">&#xe605;</i>
                        <span>个性彩铃</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="children" @click="hideBar">
                        <i class="iconfont">&#xe66c;</i>
                        <span>儿童专区</span>
                    </router-link>
                </li>
                <li @click="hideBar">
                    <router-link to="shop" @click="hideBar">
                        <i class="iconfont">&#xe616;</i>
                        <span>酷狗商城</span>
                    </router-link>
                </li>
            </ul>
            </div>
            <div class="bottom">
                <div class="public">
                    <i class="iconfont">&#xe691;</i>
                    <span>通知栏歌词</span>
                </div>
                <div class="bottom-set">
                    <i class="iconfont">&#xe603;</i>
                    <span>设置</span>
                    <i class="iconfont">&#xe75a;</i>
                    <span>退出登录</span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.menu 
      margin-top px2rem(30px)
      
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
            
          
          &hover 
            .icon,
            span 
              color #902444
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
                


</style>
