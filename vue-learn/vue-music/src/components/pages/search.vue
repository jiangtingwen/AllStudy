<template>
    <div class="search">
        <div class="search-box-wrapper">
            <!-- 搜索框 -->
        <v-search></v-search>
        </div>
        <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
            <!-- 热门搜索 -->
        <scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
            <div>
                <div class="hot-key">
                    <h1 class="title">热门搜索</h1>
                    <ul>
                        <li class="item" v-for="(item,index) in hotKey" 
                        :key="index" @click="addQuery(item.first)">
                        <span>{{item.first}}</span>
                        </li>
                    </ul>
                </div>  
            </div>
        </scroll>
        </div>
    </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
export default {
    data () {
        return {

            query:false,
            hotKey:[
                {first:"许嵩新歌发布"},
                {first:"许仙新歌发布"},
                {first:"许掘金新歌发布"},
                {first:"许拉了新歌发布"},
                {first:"许滴滴新歌发布"}
            ]
        }
    },
    components:{
       'v-search': searchBox,
       'scroll':scroll
    }
}
</script>

<style lang="stylus" scoped>


</style>
