<template>
    <div class="tab">
      <div class="left-icon" @click="leftEvent">
          <i class="iconfont">&#xe61e;</i>
      </div>
      <div class="content-tab">
         <router-link :class="objectClass" to="/my">
             <span class="tab-link" >我</span>
         </router-link>
         <router-link class="tab_item" to="/listen">
             <span class="tab-link">听</span>
         </router-link>
         <router-link class="tab_item" to="/look">
             <span class="tab-link">看</span>
         </router-link>
         <router-link class="tab_item" to="/sing">
             <sapn class="tab-link">唱</sapn>
         </router-link>
      </div>
      <div class="right-icon" @click="Add">
          <i class="iconfont">&#xe601;</i>
      </div>
    </div>
</template>

<script>

export default {
    name:'hd',
    data () {
            return {
                objectClass: {
                    tab_item:false,
                    tab_item_big:true
                }
            }
        
        },
        methods:{
            leftEvent(){
                
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
        .tab_item_big
           text-decoration none
           color #59d2d3
           margin 0 20px
           font-size 20px
           text-shadow #ffffff 2px 0 10px

    .right-icon
        flex 0 0 px2rem(50px)



</style>
