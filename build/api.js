var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/blog-list', function (req, res) {
  res.send(`{
  "status": 0,
    "msg": "",
    "data": [
    {
      "id": 1,
      "title": "标题1",
      "create_at": "2017-3-26 03:22:11"
    },
    {
      "id": 2,
      "title": "标题2",
      "create_at": "2017-3-27 03:22:11"
    }
  ]
}`);
});

module.exports = function (fn) {
  app.listen(3000, fn);
};
