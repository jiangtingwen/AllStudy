<template>
    <div class="container">
        <ul>
            <li>
            <router-link tag="div" class="tab-item" to="" 
                 v-for="(item,index) in items" :key="index">
                    <div class="bgColor">
                        <i class="iconfont"></i>
                    </div>
                    <p>酷群</p>
                </router-link>
        
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data:{
        items:[

        ]

    }

    }


</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.container
    padding px2rem(25px) px2rem(22px)
    display inline-block
    // ul
    //     li
    //         .tab-item



</style>
