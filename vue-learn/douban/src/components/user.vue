<template>
    <div class="container" v-show="ShowOr" @click="$emit(showUp)">
        <div class="top">
            <span class="LoginText">登陆</span>
            <i class="iconfont iconfont-close" @click="hidden">&#xe66f;</i>
        </div>
        <div class="line"></div>    
        <div class="middle">    
            <div class="middle-top">
                <div class="qqLogin">
                    <i class="iconfont iconfont-qq">&#xe688;</i>
                    <span class="qqLoginText">QQ账号登录</span>
                </div>
                <div class="wboLogin">
                    <i class="iconfont iconfont-webo">&#xe653;</i>
                    <span class="wboLoginText">新浪微博登录</span>
                </div>
            </div>
            <div class="middle-middle">
                <input type="text" :placeholder="placeholder1">
                <input type="text" :placeholder="placeholder2">
            </div>
            <div class="middle-bottom">
                <i class="iconfont iconfont-select">&#xea60;</i>
                <span class="read">记住我</span>
                <span class="forget">忘记密码</span>
            </div>
        </div>
        <div class="bottom">
            <div class="btn1">
                <button class="loginBtn">登录</button>
            </div>
            <div class="btn2">
                <button class="signBtn">注册新用户</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        placeholder1:{
            type:String,
            default:'邮箱或用户名'
        },
        placeholder2:{
            type:String,
            default:'密码'
        }
    },
    data() {
        return {
            ShowOr:'true'
        }
    },
    methods:{
        hidden(){
            this.ShowOr  = false
        }
    }

}
</script>

<style lang="stylus" scoped>
.container
    width 100%
    .top
        width 100%
        box-sizing border-box
        padding 25px 17px 22px 20px
        .LoginText
            font-size 18px
        .iconfont-close
            margin-left 280px
            
    .line
        width 100%
        border-bottom 1px solid #f8f8f8
    .middle
        width 100%
        box-sizing border-box
        padding  41px 43px 35px 45px 
        .middle-top
            .qqLogin
                display inline-block
                background #66b0e0
                height 40px
                width 122px
                margin-right 36px
                text-align center
                .iconfont-qq
                    font-size 18px
                    color #ffffff
                .qqLoginText
                    color #ffffff
                    line-height 36px
            .wboLogin
                display inline-block
                background #eb5f69
                height 40px
                width 122px 
                .iconfont-webo
                    font-size 18px
                    color #ffffff   
                .wboLoginText
                    color #ffffff
                    line-height 36px
        .middle-middle
            margin-top 26px
            width 98%
            input
                width 100%
                margin-bottom 13px
                height 25px
                border-radius 5px
        .middle-bottom
            margin-top 5px
            width 100%
            margin-bottom 10px
            box-sizing border-box
            position relative
            .forget
                position absolute
                right 0
    .bottom
        width 100%
        overflow hidden
        // position relative   
        padding-right 45px
        padding-left 45px
        box-sizing border-box
        .btn1,.btn2
            display inline-block   
            .loginBtn,.signBtn
                width 90px
                height 44px
                border-radius 10px
                background #438ac8
        .btn2
            position relative
            right -100px 
            
    

</style>
