<template>
    <div class="content">
        <header>
            <span class="loginText">{{Login}}</span>
            <i class="iconfont iconfont-close" @click="hidden"></i>
        </header>
        <div class="line"></div>
        <div class="top">
            <div class="Login qqLogin">
                <i class="icontfont iconfont-qq"></i>
                <span class="qqLogin">{{Login1}}</span>
            </div>
             <div class="Login wboLogin">
                <i class="icontfont iconfont-wbo"></i>
                <span class="qqLogin">{{Login2}}</span>
            </div>
        </div>
        <div class="middle">
            <div class="inputBox">
                <input type="text" :placeholder="placeholder1">
                <input type="text" :placeholder="placeholder2">
            </div>
            <div class="alert">
                <i class="iconfont iconfont-button"></i>
                <span class="readme">{{read}}</span>
                <span class="forget">{{forgetPsd}}</span>
            </div>
        </div>
        <div class="bottom">
            <div class="LoginBtn">
                <button class="btn loginBtn">{{loginBtn}}</button>
            </div>
            <div class="SingBtn">
                <button class="btn singBtn">{{singBtn}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props:{
            placeholder1:{
                type:String,
                default:'邮箱/用户名'
            },
            placeholder2:{
                type:String,
                default:'密码'
            }
       
    },
    data () {
        return {
            Login:'登陆',
            Login1:'QQ账号登录',
            Login2:'新浪微博登录',
            read:'记住密码',
            forgetPsd:'忘记密码',
            loginBtn:'登录',
            singBtn:'注册新用户'
        }
        },
        
}
</script>

<style lang="stylus" scoped>
.content
    width 100%
    header 
        padding 25px 18px 24px 20px
        position relative
        .loginText
            font-size 18px
            .iconfont-close
                position absolute
                right 0
    .line
        width 100%
        border-bottom 1px solid #000
    .top
        width 100%
        padding 40px 43px 26px 45px
        .Login
            display inline-block
        .Login .qqLogin
            background #66b0e0
            margin-right  36px
            
        .Login .wboLogin
            background #eb5f69


</style>
