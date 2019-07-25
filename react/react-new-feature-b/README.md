##why
以前async mode 现在 concurrent mode
目的: 让react整体渲染有一个优先级的排比
为什么要优先级排比
1. js是单线程
2. 浏览器多线程
   1. UI渲染线程
   2. js解析
   3. http
3. js线程和ui是互斥的,可以操作dom
4. 卡顿  js执行占据了很大的空间,导致Ui得不到响应