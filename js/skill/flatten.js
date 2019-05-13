const _ = require('loadsh');
const arr1 = [99, 0, 33, [101,202,[199,22]],1, 2];
const arr2 = [2, 1, 2];
const users =[
    {users:'fred',age:48},
    {users:'barney',age:36},
    {users:'fred',age:40},
    {users:'barney',age:34}

]
const sortedUser = _.sortBy(users,['users']);
const sortedAge = _.sortBy(users,['users']);
// const flattenArr1 = _.flattenDeep(arr1);
// const uniqArr2 = _.uniq(arr2);
// console.log(sortedUser);
console.log(sortedAge);
// console.log(uniqArr2);