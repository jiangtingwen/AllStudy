//函数防抖
function debounce (func, delay) {
    var timer;
    return function () {
        var that = this
        var args = arguments
        if(timer) {
            clearTimeout(timer)
        }else {
            timer = setTimeout(()=>{
                func.apply(that,args)
            },delay)
        }
    }
}
//函数节流
function throttle(func,delay) {
    var timer
    var pervious = 0
    return function () {
        var that = this
        var args = arguments
        if(!timer) {
            timer = setTimeout(()=>{
                timer = null
                func.apply(that,args)
            })
        } else {    

        }
    }
}