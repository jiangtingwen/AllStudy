// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
var lengthOfLongestSubstring = function(s) {
    let num=0,j=0,t=0
    for(let i=0;i<s.length;i++){
        t=s.slice(j,i).indexOf(s[i])
        if(t==-1){
            num=Math.max(num,i-j+1)
        }else{
            j=j+t+1
        }
    }
   
    return num
  



    
};
console.log(lengthOfLongestSubstring('addsaa'))