const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const http = require("http");
const cors = require("cors");
const io = require("socket.io");
var mongoose = require("mongoose");

const URI = "mongodb://localhost/kidklub";

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || URI, { useNewUrlParser: true });

// ----- Importing all modesl


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// MAKING STATIC ROUTE TO USE CSS & JS
app.use(express.static("client/src/Assets"));

// Define API routes here
require("./routes/apiRoutes")(app, express);
require("./routes/scrapeRoutes")(app);


// setup server
const server = http.createServer(app);
const socketIo = io(server);

// Allow CORS
app.use(cors());

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
server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

