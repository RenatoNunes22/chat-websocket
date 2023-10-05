import { findDocument, putDocument, requestDocument } from "./documentsdb.js";
import io from "./service.js";

io.on("connection", (socket) => {
  console.log(`Socket conneted`);

  socket.on("requestDocuments", async (returnDocument) => {
    const document = await requestDocument();
    returnDocument(document);
  });

  socket.on("disconnect", () => {
    console.log("Usuário desconectado ");
  });

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
});
