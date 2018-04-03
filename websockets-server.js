var WebSocket = require('ws');
var WebsocketServer = WebSocket.Server;  //使用 Server 属性可以创建一个可用的 WebSocket 服务器
var port = 3001;
var ws = new WebsocketServer({  //创建 WebSocket 服务器，并绑定指定的端口(3001)
  port: port
});

console.log('websocket server started');
