- 正则知识点
  贪婪匹配[0-9]+
  + 出现一次或多次
  * 出现零次或多次
  ^ 的第二种用法
  [^>]  非>符号

- 函数参数
  写一个函数，返回最大的两个数
  [2,6,'a'],[8,4,6] [10]
  返回[10,8]
  1. Math.max  最便宜的求最大值
  2. ... spread 展示一个数组
  3. n个数   slice方法
  综合题

- args
 1. map + spread 运算符
 2. 闭包
    遍历每一项，
    取前两个，slice + n + Math.max()
    求最大值
map每一项 接受 callback
callback 取前两个 + 前最大值 作为一个功能
Math.max.slice(n)
