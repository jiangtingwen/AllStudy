#相对单位。为了自适应
不同的移动设备
750px
iphone XR小手机
小米华为
iphone 大手机 MAX
小米，华为
vw,vh  按比例分配宽/高 20% 20vh, 100vh主体容器

em   移动端少用px  rem  细致的每个盒子或盒子模型的大小等比例定义
em是相对于自身的字体大小来比例
10em 等于 10*14px=140px
rem html 根元素的fontsize
:before :after 伪元素
没有标签，但却可以向真正的元素一样 来在页面上占位子
docement文档流里不需要写这个元素，副作用，不会影响内容的显示
使用css来声明，content 属性是必需的，
html 默认的字体大小是16px
如果没有设置，会使用父级，或body fontsize