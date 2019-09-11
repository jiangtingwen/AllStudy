<template>
    <div class="header">
        <i class="iconfont iconfont-back">&#xe618;</i>
        <div class="tabs">
            <div class="item">
                <span>即将上映</span>
            </div>
            <div class="item">
                <span>正在热映</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.header
    position fixed
    top 0
    display flex
    align-items center
    justify-content center
    width 100%
    height 56px
    color #fff
    background #1c2635
    text-align center
    .iconfont-back
        position absolute
        left 10px
        font-size 25px
    .tabs
        width 210px
        height 30px
        line-height 30px
        font-size 0
        border 1px solid #0d121a
        border-radius 100px
        background #0d121a    
        .item
            display inline-block
            width 50%
            font-size 15px
            border-radius 100px
</style>
