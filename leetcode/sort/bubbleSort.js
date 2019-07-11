function bubbleSort(arr) {
    var len = arr.length;
    var minIndex,temp;
    for(var i = 0; i < len - 1; i++){
        minIndex = i;
        for(var j = i + 1; j < len; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
    return arr;
}
// 每次让一个数排好 两两交换位置
const arr = [8,2,5,9,7]
console.log(bubbleSort(arr))