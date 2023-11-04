import { IncomingMessage } from "http";
import WebSocket from "ws";

const server = new WebSocket.Server({ port: 4000 }, () => {
    console.info("WEBSOKET STARDED");
});

server.on('connection', (socket: WebSocket, request: IncomingMessage) => {
    socket.on('open', function () {
        console.log("Opened")
    })
    socket.on('message', (message) => {
        const pesan = JSON.parse(message.toString())
        socket.send(JSON.stringify({
            response : "DAMANG"
        }))
        console.log(pesan)

    });
})