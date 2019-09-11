<template>
    <div class="hot-search">
        <h1 class="title">热门搜索</h1>
        <div class="list">
            <span class="item">我</span>
            <span class="item">我胡所发生的</span>
            <span class="item">我达会计师的卡卡的</span>
            <span class="item">我撒单声道</span>
            <span class="item">我大数</span>
            <span class="item">我苏卡达</span>
            <span class="item">我大姐大</span>
            <span class="item">我大肯德基</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted(){
        // this.getHot()
    },
    methods:{
        // getHot () {
        //     axios.get(`api/api/movie/get_search`).then(res => {
        //         if(res.data.code === 1001) {
        //             console.log(res)
        //         }
        //     })
        // }
    }

}
</script>

<style lang="stylus" scoped>
.hot-search
    padding 0 0 8px 15px
    background-color #fff
    .title
        padding 15px 0
        font-size 15px
        color #666
    .list
        display flex
        flex-wrap wrap
        overflow hidden
        .item
            padding 6px 12px
            margin 0 12px 12px 0
            border-radius 4px
            font-size 13px
            color #333
            background-color #f5f5f5

</style>
