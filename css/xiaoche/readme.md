## 界面大框架及经验
水平方向一般禁止滚动条，垂直方向出现滚动条
- 水平和垂直两个方向都滚动，页面会摇晃，容易产生误操作
- 垂直方向滚动式开发主要方式'
- margin:0 auto ;max-width:铺满960px  通用
   弹性布局 flex
   flex-grow   放大的比例
   flex-basis  
   flex-shrink 缩小的比例
   flex-wrap
   当网页由pc到mobile时，缩小阵仗

   经验 简单适配pc端到移动端  照顾所有的用户
   在pc端大手大脚一点，max-width magin:auto
   padding margin
   mobile flex-shrink：0） 让关键部分不缩小，缩小其他的不重要的部分
