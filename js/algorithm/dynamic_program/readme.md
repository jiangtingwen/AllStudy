动态规划入门
老虎吃羊:
500只虎，1只羊
都吃草
老虎可以吃羊，一只虎吃一只羊，
吃完羊后，这只老虎会变成羊
老虎会不会吃掉这只羊?

找到规律后，可以递归或类推

1. 吃什么羊，虎变羊， 会被吃
2. 吃羊
3. 不吃   
  一只老虎（1） 一只羊   吃
  两只老虎（2） 一只羊  不吃
  三只老虎（3） 一只羊   吃
  四只老虎（4） 一只羊  不吃
  五只老虎（5） 一只羊   吃 
  六只老虎（6） 一只羊  不吃
  奇数就吃  偶数不吃  500只老虎  不吃


  动态规划:大事化小，小事化了，找到规律
  最优子结构  上一次不吃，下一次就吃，
  边界   当老虎为一只时（n=1）吃  n=2不吃   n>2 递归子结构  
  状态转移 F(n)=!F(n-1)

  楼梯只有12阶，一步走1阶或走2阶，请问走完楼梯有多少种走法
  1. 边界 n=1 1种  n=2 2种 
  2. 子结构 n=12时，有多少种走法
  n-1 = 11 1步走到达12阶 +  n-2=10  2步走到
  3. 状态转移公式
  F(n)=F(n-1)+F(n-2) 
