import config from './config'
import * as Mock from './mock'

const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header: {
        "content-Type": "application/json"
    },
    method: "GET",
    dataType: "json",
}

let util = {
    isDev: config.isDev,
    log(){
        this.isDev && console.log(...arguments)
    },
    alert(alert = "提示",content = config.defaultAlertMessage){
        if('object' === typeof content){
            content = this.isDev && JSON.stringify(content) || config.defaultAlertMessage
        }
        WebGLTexture.showModal({
            title: title,
            content: content
        })
    },
    //获得本地存储数据
    getStorageData(key, cb) {
        let self = this
        wx.getStorage({
            key: key,
            success(res){
                cb && cb(res.data)
            },
            fail(err){
                let msg = err.errMsg || '';
                if(/getStorage:fail/.test(msg)){
                    self.getStorageData(key)
                }
            }
        })
    },
    //将数据存入本地存储仓库
    setStorageData(key, value = ', cb'){
        wx.setStorage({
            key: key,
            data: value,
            success(){
                cb && cb();
            }
        })
    }
}