const http = require('http');
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const express = require("express");
const connectToMongo = require("../db");
require("dotenv").config();

//* PORT
const PORT = process.env.PORT || 8000

//* EXPRESS SERVER
const app = express();
const server = http.createServer(app);

//* SERVER IO
const io = new Server(server, {
  cors: true
});

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
//* Connect database
connectToMongo()


app.get("/", (req, res) => {
  return res.send("Hello World")
})

app.get("/api", (req, res) => {
  return res.send("Hello api")
})

//! USER ROUTES
app.use("/api/user", require("../routes/User/user"))
// app.use("/api/learning", require("./routes/User/learning"))
//! CONVERSATION ROUTES - Learning and analysis
app.use("/api/conversation", require("../routes/User/conversation"))

//! AI RESPONSE
app.use("/api/ai", require("../routes/response"))

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
});








app.listen(PORT, () => {
  console.log("Server is running on port 8000")
})