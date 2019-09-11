<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: {
        data: {
            type:Array,
            default: () => []
        },
        pullUpLoad: {
            type:[Boolean,Object],
            default:false
        }
    },
    watch: {
        //如果父组件传进来的数据发生变化
        //ScrollView得到刷新
        data(newVal,oldVal){
            setTimeout(()=>{
                this.forceUpdate()
            },20)
        }
    },
    mounted () {
        setTimeout(() => {
            this.initScroll()
        }, 20);
    },
    methods: {
        initScroll() {
            if(!this.$refs.wrapper) {
                return
            }
            //将需要滚动的页面包裹进BScroll,使可以滚动
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,  //设置可滚动页面的内容可以被点击
                bounce:false,   //设置往上滑时，内容到底时,是否需要一个弹的效果
                pullUpLoad: this.pullUpLoad  //上拉加载更多
            })
            if(this.pullUpLoad) {
                this.initPullUpLoad()
            }
        },
        //上拉加载更多的方法
        initPullUpLoad() {
            this.scroll.on('pullingUp', () => {
                this.$emit('pulling-up')
            })  //监听正在执行上拉的事件
        },
        //防止Bscroll卡住,给页面重新添加scroll事件
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        forceUpdate() {
            if(this.pullUpLoad) {
                this.scroll.finishPullUp() //结束上拉加载的事件
                this.refresh()
            }
        }
    }

}
</script>

<style lang="stylus" scoped>
.scroll-wrapper
    height 100%
    
</style>
