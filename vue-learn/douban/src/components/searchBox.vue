<template>
    <div class="input-warper">
    <div class="search-box">
        <i class="iconfont iconfont-search">&#xe6af;</i>
        <input type="text" ref="query" v-model="query"
         :placeholder="placeholder" class="box">
        <i class="iconfont iconfont-dismiss" @click="clear">&#xe66f;</i>
    </div>
    </div>
</template>

<script>
export default {
    props:{
        placeholder:{
            type:String,
            default:'搜索您想看的电影'
        }
    },
    data () {
        return {
            query:''
        }
    },
    methods:{
        clear () {
            this.query = ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.input-warper
    background-color #f5f5f5
    padding 10px 15px
    .search-box
        display: flex;
        align-items: center;
        padding: 0 10px;
        background: #fff;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        .iconfont-search
            color #bbbbbb
        .iconfont-dismiss
            font-size 14px
        .box
            margin: 8px 20px 8px 5px;
            font-size: 13px;
            border: none;
            outline: none;
            width: calc(100% - 60px);
            color: #333;

</style>
