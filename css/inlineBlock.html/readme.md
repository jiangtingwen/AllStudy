# BFC是一个什么概念
Block Formatting Context(块级格式化上下文)

 #BFC的原理（渲染规则）
 正常的文档流，会存在边距折叠的问题（包括父容器与子容器之间的边距折叠，兄弟元素之间的折叠）
 水平方向的外边距不存在折叠的情况(因为水平方向不存在块级元素)
 2. BFC容器不会与浮动元素的box重叠
 3. BFC 在页面上是一个独立的容器，最显著的效果就是建立一个隔离的空间，
 外面的元素不会影响容器里面的元素，反之，里面的元素也不会影响容器外面的元素
可以在定义容器时加上overflow:auto
如<div class="a" style="overflow:auto;"></div>
就可以将一个正常容器变成BFC容器
4. 计算BFC容器高度时，浮动元素也会参与高度的计算（也是通常清除浮动的原理）
# 创建BFC的条件
1. float的值不为none
2. 绝对定位元素position的值为absolute,或fixed
3. 行内块inline-blocks(元素的 display: inline-block)；
4. 表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
5. overflow的值不为visible的元素；
6. 弹性盒 flex boxes (元素的display: flex或inline-flex)；
但其中，最常见的就是overflow:hidden、float:left/right、position:absolute。也就是说，每次看到这些属性的时候，就代表了该元素以及创建了一个BFC了。

