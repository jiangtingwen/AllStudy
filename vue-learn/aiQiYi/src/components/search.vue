<template>
    <div>
        <router-link to="/searchPage" tag="div" class="search">
            <i class="iconfont iconfont-search">&#xe600;</i>
            <input type="text" :placeholder="placeholder" class="box" v-model="query" ref="query">
        </router-link>
    </div>
    
</template>

<script>
export default {
    name:'search',
    props:{
        placeholder:{
            type:String,
            default:'搜索'
        }
    },
    data () {
        return {
            
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.search
    display flex
    align-items center
    width 100%
    padding 0 px2rem(22px)
    box-sizing border-box
    position relative
    height px2rem(46px)
    .box
        flex 1
        width 100%
        height 100%
        border-radius 20px
        text-align center
        font-size 10px
        background-color #34504f
        outline 0
        &:placeholder 
            color #ffffff
    .iconfont-search
        font-size 10px
        position absolute
        right 203px
        opacity 0.7
</style>    
