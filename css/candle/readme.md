1. mixin 与函数的区别
    mixin是一段样式的封装，可以在引用的地方复用
    stylus 是用的最多的
    函数 有返回值，random(min,max)
2. stylus 有内置的函数库
    floor math(0,'random')
    unit(,'px')：单位
3. 200个元素  stylus里使用for循环
        for num in 1..200
            .g-ball:nth-child({num}) //
                $width=random(0,40) //定义一个变量
                width unit($width,'px')

4. filter contrast(20)
    mix-blend-mode；screen  // 颜色的混合
    