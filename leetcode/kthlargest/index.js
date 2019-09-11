// [1,4,2,6,9,10] 2
// 选择第k个大的数字
    function kthlargrst (nums,k) {
        if(k < 0 || k > nums.length - 1) return NaN;
        return nums.sort((a,b) => b - a)[k - 1]
    }

    console.log( kthlargrst([1,4,2,6,9,10],2))


