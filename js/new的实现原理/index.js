function New (fn) {
    let obj = {}
    obj._proto_ = fn.Prototype
    let res = fn.apply(obj,arguments)
    if(typeof res === 'object' || typeof res === 'function') {
        return res
    }
    return obj
}