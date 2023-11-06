import { insertLinkDocument, removeLinkDocument } from "./index.js";

const socket = io();

socket.emit("requestDocuments", (document) => {
  document.forEach((element) => {
    insertLinkDocument(element.name);
  });
});

function addNewDocument(documentName) {
  socket.emit("addDocument", documentName);
}

socket.on("add_interfaceDocument", (document) => {
  insertLinkDocument(document);
});

socket.on("document_exist", (documentExist) => {
  alert(`O documento ${documentExist} já existe`);
});

socket.on("exclude_interfaceDocument", (document) => {
  removeLinkDocument(document);
});

export { addNewDocument };
