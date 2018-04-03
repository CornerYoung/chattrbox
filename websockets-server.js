var WebSocket = require('ws');
var WebsocketServer = WebSocket.Server;  //使用 Server 属性可以创建一个可用的 WebSocket 服务器
var port = 3001;
var ws = new WebsocketServer({  //创建 WebSocket 服务器，并绑定指定的端口(3001)
  port: port
});

console.log('websocket server started');

ws.on('connection',function(socket){
  console.log('client connection established');

  socket.on('message',function(data){  //回声服务器
    console.log('message received: ' + data);
    //将事件处理程序直接注册在 socket 对象上
    //message 事件回调函数会接受客户端发送的任何信息
    //现在，聊天程序只是在相同的 socket 连接上将收到的信息 send 回去
    socket.send(data);
  });
});
