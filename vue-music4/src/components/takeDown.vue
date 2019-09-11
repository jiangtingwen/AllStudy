<template>
    <div class="container" v-show="true">
        <ul>
           <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe631;</i>
                   </div>
               </router-link>
               <p>酷群</p>
           </li>
        <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe66d;</i>
                   </div>
               </router-link>
               <p>唱片店</p>
           </li>
        <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe69a;</i>
                   </div>
               </router-link>
               <p>偶遇</p>
           </li>
        <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe609;</i>
                   </div>
               </router-link>
               <p>首唱会</p>
           </li>
        <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe60a;</i>
                   </div>
               </router-link>
               <p>排行榜</p>
           </li>
        <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe606;</i>
                   </div>
               </router-link>
               <p>视频</p>
           </li>
        <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe60b;</i>
                   </div>
               </router-link>
               <p>分类</p>
           </li>
        <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe60c;</i>
                   </div>
               </router-link>
               <p>歌手</p>
           </li>
        <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe60f;</i>
                   </div>
               </router-link>
               <p>儿童专区</p>
           </li>
        <li>
               <router-link class="tab-item" tag="div" to="">
                   <div class="bgColor">
                       <i class="iconfont">&#xe618;</i>
                   </div>
               </router-link>
               <p>欢乐节奏</p>
           </li>
        
        </ul>
    </div>

</template>

<script>

export default {
    }
</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.container
    padding px2rem(25px) px2rem(22px)
    display inline-block
    white-space nowrap
    overflow-x scroll
    width 100%
    -webkit-overflow-scrolling touch
    &::-webkit-scrollbar
        width 0
        height 0
        display none
    ul  
        li
            display inline-block
            .tab-item
                .bgColor
                    width px2rem(100px)
                    height px2rem(100px)
                    border-radius 50%
                    background #51a0a3  
                    margin-right 40px
                    position relative
                    .iconfont
                        position absolute
                        top 34%
                        left 23%
                        font-size 20px
                        opacity 0.8
            p
                opacity 0.9
                margin-top 10px
                         
                
                
                
        



</style>
