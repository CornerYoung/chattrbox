var WebSocket = require('ws');
var WebsocketServer = WebSocket.Server;  //使用 Server 属性可以创建一个可用的 WebSocket 服务器
var port = 3001;
var ws = new WebsocketServer({  //创建 WebSocket 服务器，并绑定指定的端口(3001)
  port: port
});
var messages = [];

console.log('websocket server started');

ws.on('connection',function(socket){
  console.log('client connection established');

  messages.forEach(function(msg){
    socket.send(msg);
  });

  socket.on('message',function(data){  //回声服务器
    console.log('message received: ' + data);
    messages.push(data);  //将聊天服务器收到的消息保存起来
    //将事件处理程序直接注册在 socket 对象上
    //message 事件回调函数会接受客户端发送的任何信息
    //现在，聊天程序只是在相同的 socket 连接上将收到的信息 send 回去
    ws.clients.forEach(function(clientSocket){  //ws 对象用 clients 属性记录了所有的连接,该属性是一个数组，可以对其进行迭代
      clientSocket.send(data);
    });
  });
});
