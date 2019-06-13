// 有三个路由, a 点击， 切换content 显示 对应的component
// router.js 前端  index.js 后端
class Router {
    //路由的配置
    constructor(options) {
        this.routes = {};
        this.init();
        this.bindEvent();
        options.forEach(item => {
            this.route(item.path,()=>{
                document.getElementById('content').innerHTML = item.component;
            })
        });
    }
    bindEvent () {
        const _this = this;
        const links = document.getElementsByTagName('a');
        [].forEach.call(links,link => {
            link.addEventListener('click',function() {
                const url = this.getAttribute('data-href');
                _this.push(url);
            })

        });
    }
    push(url){
        //进入浏览器history栈
        window.history.pushState({},null,url);
        this.updateView();
    }
    route (path,cb) {
        this.routes[path] = cb;
    }
    init() {
       window.addEventListener('load',this.updateView.bind(this)) 
       window.addEventListener('popstate',this.updateView.bind(this))
    }
    updateView(){
        // 当前的url,
        const currentUrl = window.location.pathname || '/';
        this.routes[currentUrl] && this.routes[currentUrl]();
    }
}
