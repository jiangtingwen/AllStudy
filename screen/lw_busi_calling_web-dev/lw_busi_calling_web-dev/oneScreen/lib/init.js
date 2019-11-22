function init () {
    　　　　　　
              var width = document.documentElement.clientWidth
    　　　　　　// 设置根元素字体大小。此时为宽100等分
              document.documentElement.style.fontSize = width / 100 + 'px'

            }
    
    　　　　 
            init()
            // 监听手机旋转的事件的时机，重新设置
            // window.addEventListener('orientationchange', init)
            // 监听手机窗口变化，重新设置
            window.addEventListener('resize', init)