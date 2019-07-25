var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var data = {
    code:200,
    msg:'success'
}
//创建mysql连接
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'trip'
})