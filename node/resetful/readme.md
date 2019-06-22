- json 格式 是标准的数据交换
- 前后端开发, /api  json格式来交流
- 全栈fullstack

- restful 一切皆资源
暴露资源
- 设计URL
  /posts
  /posts/:id
  /comments
  /comments/:id
  /posts/1/comments

HTTP 动词
GET  查询
加一条评论   增加一个资源
POST 新增 /comments 
DELETE动词  删除  /posts/2
PUT/PATCH  修改   /comments/2   body 最美不是下雨天,是与你.....
PUT   把全新的所有的内容，去替换掉旧的内容
PATCH  只要传递需要更新的字段,  只要传递局部

- restful 考点
认为一切皆资源，URL是唯一定位资源的符号.他有一定的设计原则
HTTP动词是Web资源的状态转换动词

操作     SQL方法    HTTP动词
CREATE   INSERT       POST 
READ     SELECT       GET
UPDATE    UPDATE     PUT/PATCH
DELETE    DELETE     DELETE
