不再写css，写的是css的预编译语言stylus
快
一套语法，支持现代css开发,
compile过程
stylus style.styl -o style.css 将style.styl输出为style.css文件
-o  output 输出的
-w watch 一直监听style.styl文件的修改，实时的去生成style.css

1. 跟css 的规则说拜拜
{}  :  ;都可以不要 tab 
2. stylus提供嵌套功能
  可以帮我们补上前面的选择器
  现在我们的css就模块化了，从此css就有编程的感觉了
3. &运算符
依然使用tab缩进。但是他与上一级同级
适合于同一个元素多个类名， .active
或者伪类，伪状态
4. 变量定义
将常用的，重复使用
css不是编程语言,表达性的
在最上面统一定义后，可以修改一处，所有使用了此变量的地方都会跟着修改
成为网站的风格


css语法
1. overflow:hidden
2. flex align-items 搞定vertical-align有时不好弄得情况
vertical-align 兄弟之间 文字和图片之间垂直居中
text-rendering：optimizeLegigility：抗锯齿  高清手机上文字的边缘不出现锯齿
4. flex-shrink:0
flex-grow

5. 第几个元素的选择
:firstchild
:lastchild
:nth-child(2n)奇数时
:nth-child(2n+1)偶数时
-apple-system





