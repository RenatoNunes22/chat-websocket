import {
  findDocument,
  putDocument,
  excludeDocument,
} from "../db/documentsdb.js";

export function recordEventsDocument(socket, io) {
  socket.on("joinRoom", async (roomSocket, returnText) => {
    socket.join(roomSocket);
    const content = await findDocument(roomSocket);
    if (content) {
      returnText(content.text);
    }
  });

  socket.on("message", async (msg, roomSocket) => {
    const document = await putDocument(roomSocket, msg);
    if (document.modifiedCount) {
      document.text = msg;
      socket.to(roomSocket).emit("textMessage", msg);
    }
  });

  socket.on("excludeDocument", async (roomSocket) => {
    const result = await excludeDocument(roomSocket);
    if (result.deletedCount) {
      io.emit("exclude_interfaceDocument", roomSocket);
    }
  });
}
