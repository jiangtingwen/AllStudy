// 编写一个函数，返回给定列表/数组的最小和最大数量。

// 例子
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// 备注
// 所有数组或列表将始终至少包含一个元素，因此您无需检查长度。此外，你的函数总是会得到一个数组或列表，你不必检查null，undefined或类似的。
// ===========================
//方法一
function minMax(arr){
    
    console.log(arr);
    var arr1 =[];
    arr1.push(Math.min.apply(0,arr));
    arr1.push(Math.max.apply(0,arr));
    return arr1;
    
  
    
  
}
//方法二
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }
console.log(minMax([123,3,3,4]));