//年终奖
// 绩效S   5个月
//     A   3
//     B   2
//     C   1
//     D   NULL

var calculateBouce = function (perfomanceLevel, salary) {

    if (perfomanceLevel == 'S') {
        return perfomanS(salary);
    } else if (perfomanceLevel == 'A') {
        return perfomanA(salary);
    }
    else if (perfomanceLevel == 'B') {
        return perfomanB(salary);
    }else if (perfomanceLevel == 'X') {
        return perfomanX(salary);
    }

    else {
        console.log('开除');
    }
}
var perfomanX = function calculate (salary){
    return salary*60;
}                
var perfomanS = function calculate (salary){
        return salary*5;
}
var perfomanA = function calculate (salary){
    return salary*3;
}
var perfomanB = function calculate (salary){
    return salary*2;
}

console.log(calculateBouce('X', 20000));