var express = require('express')
var fs = require('fs')
var router = express.Router()

//首页的操作
router.get('/',function(req,res,next) {
    //res.statusCode = 200
    //res.setHeader('Content-Type','application/json')
    function readImgae(path,res) {
        fs.readFile(path,'binary',function(err,file){
            if(err) {
                return
            } else {
                res.writeHead(200,{'Content-Type':'img/jpeg'})
                res.write(file,'binary')
                res.end()
            }
        })
    }
    readImgae('/public/image/head.jpeg',res)
})
module.exports = router