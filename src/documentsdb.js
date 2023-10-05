import { documentCollection } from "./dbConnect.js";

function requestDocument() {
  return documentCollection.find().toArray();
}

function findDocument(roomSocket) {
  return documentCollection.findOne({
    name: roomSocket,
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

export { findDocument, putDocument, requestDocument };
