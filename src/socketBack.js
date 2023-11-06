import {
  addDocumentDB,
  findDocument,
  putDocument,
  requestDocument,
  excludeDocument,
} from "./documentsdb.js";
import io from "./service.js";

io.on("connection", (socket) => {
  console.log(`Socket conneted`);

  socket.on("disconnect", () => {
    console.log("Usuário desconectado ");
  });

  socket.on("requestDocuments", async (returnDocument) => {
    const document = await requestDocument();
    returnDocument(document);
  });

  socket.on("addDocument", async (documentName) => {
    const documentExist = (await findDocument(documentName)) !== null;

    if (documentExist) {
      socket.emit("document_exist", documentName);
    } else {
      const result = await addDocumentDB(documentName);
      if (result.acknowledged) {
        io.emit("add_interfaceDocument", documentName);
      }
    }
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
  socket.on("excludeDocument", async (roomSocket) => {
    const result = await excludeDocument(roomSocket);
    if (result.deletedCount) {
      io.emit("exclude_interfaceDocument", roomSocket);
    }
  });
});
