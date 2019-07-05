// 为了便于后面在 this.code 变化或组件销毁时移除时动态创建的<style>标签
//我们给每个style标签上都加上一个随机生成的id

//生成随机字符串
export default function (len = 32) {
    const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    const maxPos = $chars.length
    let str = ''
    for (let i = 0; i < len; i++){
        //charAt 返回指定索引位置的字符
        str += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
}