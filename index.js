var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req,res){
  console.log('Responding to a request.');
  var url = req.url;

  var fileName = 'index.html';
  if(url.length > 1){
    fileName = url.substring(1);  //去掉 url 首字符，即 ‘/’
  };
  console.log(fileName);
  var filePath = path.resolve(__dirname,'app',fileName);
  fs.readFile(filePath,function(err,data){
    res.end(data);  //回调函数中，使用 res.end 返回文件内容，而不再是返回 HTML 文本
  });
});
server.listen(3000);  //端口绑定
