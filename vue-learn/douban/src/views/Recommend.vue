<template>
    <div class="recommend">
        <!-- 首页整个页面都支持better-scroll -->
        <ScrollView>
            <!-- 父组件给子组件传参 -->
            <ListBook :movies="playingMovies" 
            :title="`正在热映(${playingCount})`" @more="goMore(1)"
             @select="selectItem"></ListBook>
             <div class="space" style="background-color:#f6f6f6;height:10px"></div>
             <ListBook :movies="commingMovies" :title="`即将上映(${commingCount})`" 
             @more="goMore(0)" @select="selectItem"></ListBook>
        </ScrollView>
    </div>
</template>

<script>
import ListBook from '@/components/ListBlock'
import axios from 'axios'
export default {
    data () {
        return {
            playingMovies:[],
            playingCount:0,
            commingMovies:[],
            commingCount:0
        }
    },
    components:{
        ListBook
    },
    created () {
        this.getMovie()
    },
    methods: {
        getMovie() {
            axios.get('/api/api/movie/get_hot').then(res=>{
                // console.log(res)
                if(res.data.code === 1001) {
                    const {comming,playing} = res.data.result
                    this.playingMovies = playing.movies
                    this.playingCount = playing.count
                    this.commingMovies = comming.movies
                    this.commingCount = comming.count
                    // console.log(playing.movies)
                }
            })
        },
        selectItem(id) {
            console.log(id)
            this.$router.push(`/movie/${id}`)   //路由跳转,携带id参数,跳至电影详情页
        },
        goMore (type) {
            console.log(type)
            this.$router.push(`/list/${type}`)
        },
    }

}
</script>

<style lang="stylus" scoped>
.recommend
    height 100%
</style>
