#清除浮动的五种方法  防止父容器高度坍塌
1. 在父元素的底部加一行代码 <div style="clear:both"></div>
2. 利用BFC-- 块级格式化上下文来给父元素增加css  设置overflow:hidden  auto scroll 都能触发BFC块级格式化上下文操作
3. 利用伪元素给父元素div添加一个clearfix的类名, 如:
                .cententfix::after{
                     content:"";
                     display:block;
                     clear:both;
                    }           
4. 给父元素增加一行css
.content{
    float:left
}
让父容器也浮动起来（不建议使用）
5. 一个更优雅的改进 --尼古拉斯大师 方法
将dispaly设置为table,可以创建一个表格单元，这个匿名的表格单元，可以直接触发BFC，
.clearfix:after{
    content:"";
    display:table;//表格   会直接触发BFC，块级格式化上下文
    clear:both;

}