<template>
    <div class="tab">
      <div class="left-icon" @click="leftEvent">
          <i class="iconfont">&#xe61e;</i>
      </div>
      <div class="content-tab">
         <router-link :class="router-link-exact-active" to="/my">
             <span class="tab-link" >我</span>
         </router-link>
         <router-link class="tab_item" to="/listen">
             <span class="tab-link">听</span>
         </router-link>
         <router-link class="tab_item" to="/look">
             <span class="tab-link">看</span>
         </router-link>
         <router-link class="tab_item" to="/search">
             <sapn class="tab-link">搜</sapn>
         </router-link>
      </div>
      <div class="right-icon" @click="Add">
          <i class="iconfont">&#xe601;</i>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name:'header',
    data () {
            return {
                
            }
        
        },
        methods:{
            leftEvent(){
                console.log('123')
                this.$store.dispatch('setShowSidebar',true)
            },
            Add () {

            }
        }
    }

</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.tab
    padding px2rem(50px) px2rem(30px)
    display flex
    z-index 100
    .left-icon
        flex 0 0 px2rem(50px)
    .content-tab
        flex 1
        text-align center
        .tab_item
           text-decoration none
           color #59d2d3
           margin 0 20px
        .router-link-exact-active 
           text-decoration none
           color #59d2d3
           margin 0 20px
           font-size 20px
           text-shadow #ffffff 2px 0 10px

    .right-icon
        flex 0 0 px2rem(50px)



</style>
