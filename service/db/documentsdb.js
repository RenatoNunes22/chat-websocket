import { documentCollection } from "./dbConnect.js";

function requestDocument() {
  return documentCollection.find().toArray();
}

function findDocument(roomSocket) {
  return documentCollection.findOne({
    name: roomSocket,
  });
}

function addDocumentDB(documentName) {
  return documentCollection.insertOne({
    name: documentName,
    text: "",
  });
}

function putDocument(roomSocket, text) {
  return documentCollection.updateOne(
    {
      name: roomSocket,
    },
    {
      $set: {
        text,
      },
    }
  );
}

function excludeDocument(roomSocket) {
  return documentCollection.deleteOne({
    name: roomSocket,
  });
}

export {
  addDocumentDB,
  findDocument,
  putDocument,
  requestDocument,
  excludeDocument,
};
