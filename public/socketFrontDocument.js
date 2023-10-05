import { putchTextEdite } from "./document.js";

const socket = io();

export function selectRoom(roomSocket) {
  socket.emit("joinRoom", roomSocket, (content) => {
    putchTextEdite(content);
  });
}

export function emitTextEdit(msg, roomSocket) {
  socket.emit("message", msg, roomSocket);
}

socket.on("textMessage", (msg) => {
  putchTextEdite(msg);
});
