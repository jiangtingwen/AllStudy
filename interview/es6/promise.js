class Promise {
    constructor(handle){  //handle里有两个参数,一个成功resolve,一个失败rejected
        this.status = 'pedding'
        this.value = 'undefined'
        this.reason = 'undefined'
        this.onResolvedCallback = []  //成功存放的数组
        this.onRejectedCallback = []  //失败存放的数组
        let resolve = value => {
            if(this.status === 'pedding') {
                this.status = 'resolve'
                this.value = value
                for(let i = 0; i < this.onResolvedCallback.length; i++) {
                    this.onResolvedCallback[i].value
                }
            }
        }
        let reject = reason => {
            if(this.status === 'pedding') {
                this.status = 'reject'
                this.value = reason
                for(let i = 0; i < this.onRejectedCallback.length; i++){
                    this.onRejectedCallback[i].value
                }
            }
        }
        try {
            handle(resolve,reject)
        }
        catch (err){
            reject(err)
        }
       
    } 
}
Promise.prototype.then = (onFullFilled,onRejected) => {
    if(this.status === 'resolved') {
        onFullFilled(this.value)
    }
    if(this.status === 'reject') {
        onRejected(this.reason)
    }
    if(this.status === 'pedding') {
        this.onResolvedCallback.push(()=>{
            onFullFilled(this.value)
        })
        this.onRejectedCallback.push(() => {
            onRejected(this.reason)
        })
    }
}
const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('hello world')
    },1000)
})
p.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})