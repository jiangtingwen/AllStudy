// [1,2,3,4,5,6] 2
// 排序 n nLogN  已排序
function boinarySearch(arr,data) {
    var min = 0,
        max = arr.length -1,
        mid;
        while(min <= max){
            mid =Math.floor((min + max) / 2)
            if(data < arr[mid]) {
                mid = mid - 1;
            } else if(arr[mid] < data) {
                min = mid + 1
            } else {
                return middle
            }
        }
}
var arr = [1,2,3,4,5,6];
console.log(boinarySearch(arr,2));

