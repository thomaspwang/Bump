const WebSocket = require("ws");
const ws = new WebSocket('ws://localhost:8080/617447c0317bb912994c04ea');

ws.on('open', function open() {
  ws.send('{ "_id":"617447c0317bb912994c04ea", "time": "9PM", "message": "hi", "friendid":"617447c0317bb912994c04ea"}');
});

ws.on('message', function incoming(message) {
  console.log('received: %s', message);
});
