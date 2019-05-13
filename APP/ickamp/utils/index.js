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
    log() {
        this.isDev && console.log(...arguments)
    },
    alert(title = "提示", content = config.defaultAlertMessage) {
        if ('object' === typeof content) {
            content = this.isDev && JSON.stringify(content) || config.defaultAlertMessage//相当于三元运算符  this.isDev为true则执行JSON.stringify(content)   反之执行config.defaultAlertMessage
        }
        wx.showModel({
            title: title,
            content: content
        })
    },
    getStorageData(key, cb) {
        let self = this
        wx.getStorage({
            key: key,
            success(res) {
                cb && cb(res.data)
            },
            fail(err) {
                let msg = err.errMsg || '';
                if (/getStorage:fail/.test(msg)) {
                    self.getStorageData(key)
                }
            }
        })
    },
    setStorageData(key, value = '', cb) {
        wx.setStorage({
            key: key,
            data: value,
            success() {
                cb && cb();
            },
            fail(err) {

            }
        })
    },
    request(opt) {
        //默认 mock = false 默认是生产环境
        let { url, data, header, method, dataType, mock=false } = opt
        // 相当于 let url = opt.url
        let self = this
        return new Promise((resolve, reject) => {
            if (mock) {
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                }
                if (res && res.statusCode === 200 && res.data) {
                    resolve(res.data)
                } else {
                    self.alert('提示', res)
                    reject(res)
                }
            } else {
                wx.request({
                    url: url,
                    data: data,
                    header: header,
                    method: method,
                    dataType: dataType,
                    succecc: function (res) {
                        if (res && res.statusCode === 200 && res.data) {
                            resolve(res.data)
                        } else {
                            self.alert('提示', res)
                            reject(res)
                        }
                    },
                    fail: function (err) {
                        self.log(err)
                        self.alert('提示', res)
                        reject(res)
                    }
                })
            }
        })
    }
}
export default util
