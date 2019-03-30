- css 命名词汇
feeds复数（如微博加载更多）， feed-item（其中的某一条）content(内容)
- html结构及布局
从上到下，从左到右，语义化和功能性
1. 套路
content>h3+p
2. 舍得做盒子
3. a 作为盒子，在移动端是很常见的
   display:block  行内元素转块级元素
4. 盒子模型
文字line-height padding margin
5. 文字截断
天猫  商铺信息是由商家填的，它的高度不被限制
display:-webkit-box;新的盒子模型，必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
overflow:hidden;
-webkit-line-clamp行数
-webkit-box-orient:vertical  默认是水平的，当值设为vertical时为垂直排列

s
