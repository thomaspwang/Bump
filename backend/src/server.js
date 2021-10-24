require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");

const authRouter = require('./routes/authRouter')
const locationRouter = require('./routes/locationRouter')
const messageRouter = require('./routes/messageRouter')
const http = require("http");

const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT ? process.env.PORT : 4000;

mongoose.connect(process.env.MONGOOSE, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
    console.log('DB connected successfully!');
});
db.on('error', (err) => {
    console.error(`Error while connecting to DB: ${err.message}`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use('/api/auth', authRouter)
app.use('/api/location', locationRouter)
app.use('/api/message', messageRouter)

// Websocket server
const WebSocket = require('ws')

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

clients = {}
wss.on('connection', function connection(ws, request) {
  console.log('new client connection')
  var str = request.url
  clients[str.substring(1)] = ws 
  ws.on('message', function incoming(message) {
    
    message = JSON.parse(message)
    client = clients[message.friendid]
    if (client != null) {
      client.send(JSON.stringify({"_id" : message._id, "time" : message.time, "message" : message.message, "friendid":  message.friendid}));
    }
  });

});

server.listen(8080, () => {
  console.log("Listening to port 8080");
});

module.exports = { app }
