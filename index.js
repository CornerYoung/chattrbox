var http = require('http');
var fs = require('fs');
var extract = require('./extract');
var wss = require('./websockets-server');

var handleError = function(err,res){
  res.writeHead(404);
  res.end();
};

var server = http.createServer(function(req,res){
  console.log('Responding to a request.');

  //以下注释内容已在 extract 模块中写好，并在本页面中引入了模块
  // var url = req.url;
  //
  // var fileName = 'index.html';
  // if(url.length > 1){
  //   fileName = url.substring(1);  //去掉 url 首字符，即 ‘/’
  // };
  // console.log(fileName);
  // var filePath = path.resolve(__dirname,'app',fileName);

  var filePath = extract(req.url);
  fs.readFile(filePath,function(err,data){
    if(err){
      handleError(err,res);
      return;
    }else{
      res.end(data);  //回调函数中，使用 res.end 返回文件内容，而不再是返回 HTML 文本
    };

  });
});
server.listen(3000);  //端口绑定
