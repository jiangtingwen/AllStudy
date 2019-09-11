//从左边读和右边读内容都一样
// function valid (str) {
//     if( !str || typeof str != 'string')
//     return false
//     return str.split("").reverse().join("") === str
// }

// ---------------------
//包容大小写
//空,特殊符号，忽略
// "A man, a plan, a canal: Panama"
// true
// "race a car"
// false
var isValidChar = (s) => {  //abc   123
    return /^[\w]$/.test(s);
}
var isPalindrom = (s) => {
    s = s.toLowerCase();  //变小写
    let left = 0,
    right = s.length - 1;
    while(left < right) {
        if(!isValidChar(s[left])) {
            left++;
            continue;
        }
        if(!isValidChar(s[right])) {
            right--;
            continue;
        }
        if(s[left] == s[right]) {
            left++;
            right--;
        } else {
            break;
        }
    }
    return right <= left
}
console.log(isPalindrom('race a car'))