import axios from 'axios'
import Cookie from 'js-cookie'
import router from '@/router'
const instance = axios.create({
    timeout:60000,
    // baseUrl:'https://www.easy-mock.com/mock/5ca4951c34e2a127a257d652/example'
})

const COOKIE_NAME = 'movie_trailer_user'

//响应拦截
instance.interceptors.response.use(res => {
    const {data} = res   //相当于 const data = res.data
    //登录失败
    if(data.code === 1003) {
        Cookie.remove(COOKIE_NAME)
        router.replace('/login')   //接口报错时,跳至登录页面
        return
    }
    return Promise.resolve(data)
}, () => {
    //如果没有拿到接口中的数据,跳至报错页面
    router.push('/error')
})

export default {
    //属性拦截
    install: (Vue,option) => {
        Object.defineProperty(Vue.prototype,'$axios',{value:instance})
    }
}