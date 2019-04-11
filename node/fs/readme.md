node 让js来到了后端

服务器  Linux
文件系统操作 fs
连接数据库 db

没有DOM
文件读取 要花时间 定位文件（参数1），打开文件, 将文件内容读到内存中 输出到命令行
文件越大，花时间越多  花时间的东西在js里是异步的
1. callback(回调函数)
fs.readFile(path,'utf8',function(err,data){

})

2. promise
  分开,Promise是类 用于处理耗时异步问题的类，为了防止回调地狱，看到耗时问题就用出一个promise实例
  resolve 将控制权交给then 将结果通过resolve(data)
  rejecto  失败catch(e){}
