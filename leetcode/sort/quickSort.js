// 快速排序
// 抽象   a  b c
//递归
function quickSort(arr) {
    // left a
    // base 中间值
    // right b
    //concat 连接数组
    if(arr.length <= 1) {
        return arr;
    }
    var left = [],right = [],baseDot = Math.floor(arr.length / 2),
    //[0] 切割的数组的下标
    base = arr.splice(baseDot, 1)[0];
    
    //找到中间值
    for (var i = 0; i< arr.length; i++) {
        if(arr[i] < base) {
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }
    
    return quickSort(left).concat([base],quickSort(right));
}
console.log(quickSort([8,2,5,9,7]))