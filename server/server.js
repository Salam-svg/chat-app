const express = require('express');
const {createServer} = require("node:http")
const {Server} = require("socket.io")
const cors = require("cors")
const app = express();
const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }
} );
app.use(cors())
const PORT = 4500;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

io.on('connection', (socket) => {
    console.log(socket.id + 'has connected');
    socket.on('disconnect', () => {
        console.log(socket.id + 'has disconnected');
    });
})