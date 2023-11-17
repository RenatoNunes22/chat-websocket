import {
  addDocumentDB,
  findDocument,
  requestDocument,
} from "../db/documentsdb.js";

export function recordInitialEvent(socket, io) {
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
}
