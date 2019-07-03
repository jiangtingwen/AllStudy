1. 后缀变成.ts
    typescript是js的超集
    typescript会编译成js
    可以跟写java一样
    .ts -> webpack loader -> babel ->js
    适合大型项目   可以有效减少bug 60%以上
    更好的进行多人协作

- 将弱类型的js 变成静态类型的typescript
  错误在编译阶段就解决了
  let a: String = 1;
  在比较重要的场合
  interface 声明自定义的类型   接口
  多出的20%代码,有了类型检测，代码更可靠。在代码写的时候保存就能发现错误,有利于合作

- vuex提供了一些类型给typescript
