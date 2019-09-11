var str = 'abcdeffggghhhhiiiii';
function getMax (str) {
    let hash = {},//哈希表
    max = 0,maxstr;
    for (let i = 0; i < str.length; i++) {
        //hash 有 i 吗
        //有加1
        //没有1
        let char = str[i];
        if(!hash[char]) {
            //没有
            hash[char] = 1;
        } else {
            hash[char]++;
        }
        if(hash[char] > max){
           max = hash[char]
           maxstr =  char
        }
    }
    return maxstr;

}

console.log(getMax(str))