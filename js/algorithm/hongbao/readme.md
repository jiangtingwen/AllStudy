如何实现红包算法
固定金额的红包，犹若干人来抢，规则？
1. 抢到金额之和等于红包金额，不能超过，也不能少于
2. 手气王 ， 0.01至少
3. 金额随机，随机数， 公平， 每个人抢到金额的概率要相同

发钱    total  = restAmount 最初
resetNum（发出去红包的数量）==num 最初
随机一次，restAmount=total-随机数
restNum--
最后一个人，得最后剩下的钱数 for(i=0;i< num-1;i++)
每次随机，钱数是我们需要的，push到数组里

综合
Math 是数学对象
Math.random()产生随机数
parseFloat() 将字符串等类型 解析为浮点数类型
类型的转换 "23.1"=>23.1 parseFloat 将字符串转化为数值类型

parseFloat(Math.random()).toFixed(2) //保留小数点后两位的随机数
0-9之间的整数 Math.floor(Math.random()*10)
let max=100
let min=0;
最小值和最大值之间的数
min+Math.floor(Math.random()*(max-min));
