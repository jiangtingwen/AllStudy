arguments.length：获取实参个数

arguments.callee.length:获取形参个数

arguments.callee:指带函数本身


如果函数的最后一个命名参数以...为前缀，则它将成为一个由剩余参数组成的真数组，
其中从0（包括）到theArgs.length（排除）的元素由传递给函数的实际参数提供。

剩余参数和 arguments对象之间的区别主要有三个：

- 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。
- arguments对象不是一个真正的数组，而剩余参数是真正的 Array实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach或pop。
- arguments对象还有一些附加的属性 （如callee属性）。