function deepClone (o) {
    JSON.parse(JSON.stringify(o))
}

function deepClone (obj) {
    let objClone = Array.isArray(obj) ? [] : {}
    if(obj && typeof obj === 'object') {
        for(let key in obj) {
            //判断子元素是否为递归复制,如果是,递归复制
            if(obj[key] && obj[key] === 'object') {
                objClone[key] = deepClone(obj[key])
            }else {
                //如果不是,简单复制
                objClone[key] = obj[key]
            } 
        }
    }
    return objClone
}
function deepClone (obj) {
    let objClone = Array.isArray(obj) ? [] : {}
    if(obj && typeof obj === 'object') {
        for(let key in obj) {
            //判断obj子元素是否为对象,如果是,递归复制
            if(obj[key] && typeof obj[key] === 'object') {
                objClone = deepClone(obj[key])
            }else {
                //如果不是,简单复制
                objClone = obj[key]
            }
        }
    }   
    return objClone
}
//浅拷贝
let obj = {}
let obj1 =  Object.assign({},obj)