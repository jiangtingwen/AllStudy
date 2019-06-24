// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。
// 示例 1:
// nums1 = [1, 3]
// nums2 = [2]
// 则中位数是 2.0
// 示例 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// 则中位数是 (2 + 3)/2 = 2.5
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length && nums2.length <= 0){
        return false
    } else{
        return (nums1) => {
            var sum1 = 0;
            for(let i =0;i<nums1.length;i++){
                sum1+=nums1[i]
            }
            return sum1
        }

    }
};
console.log(findMedianSortedArrays([1,2],[1,2,3]))
