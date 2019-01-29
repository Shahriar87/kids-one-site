const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
// const PORT2 = process.env.PORT2 || 4008; 
const app = express();

const http = require("http");
const cors = require("cors");
const io = require("socket.io");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here




// setup server
const server = http.createServer(app);
const socketIo = io(server);

// Allow CORS
app.use(cors());

// Render a API index page
app.get('/messages', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

// Setup socket.io
socketIo.on('connection', socket => {
  const username = socket.handshake.query.username;
  console.log(`${username} connected`);

  socket.on('client:message', data => {
    console.log(`${data.username}: ${data.message}`);

    // message received from client, now broadcast it to everyone else
    socket.broadcast.emit('server:message', data);
  });

  socket.on('disconnect', () => {
    console.log(`${username} disconnected`);
  });
});





// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start listening
server.listen(PORT,() => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
