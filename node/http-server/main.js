{/* <script src="./http"></script> */}
// require  关键字 引入一个模块，COMMONJS 引入模块的规则
const http = require('http');
let i = 0;
http
    .createServer(function(request,response){
        response.end(`Hello world!${++i}`);

    })
    .listen(3000);