const longestCommonPrefix = (strs) => {
    //最短的字符
    if(strs.length === 0) return ""
    if(strs.length === 1) return strs
    let minlen = Number.MAX_VALUE;
    for(let i = 0; i < strs.length; i++) {
        // if(strs[i].length < minlen) {
        //     minlen = strs[i].length
        // }
        minlen = Math.min(minlne,strs[i].length)
    }
    //二分
    let low = 0,
    high = minLen;  //动态
    while (low <= high) {
        const middle = (low + high) >> 1;
        if(isCommonPrefix(strs,middle))  low = middle + 1
        else high = middle -1           

    }
    return strs[0].substring(0,(low + high) >> 1)
}
longestCommonPrefix(["flower","flow","flight"])