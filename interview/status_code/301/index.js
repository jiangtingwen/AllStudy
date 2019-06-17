const http = require('http');
const server = http.createServer((req,res) => {
    // 响应头  响应体
//    res.writeHead(302,{
//        Location:'http://www.mi.com'
//    })
//     res.end();
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('hello world');
})

server.listen(8080);