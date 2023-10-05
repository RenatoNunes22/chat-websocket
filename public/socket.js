import { insertLinkDocument } from "./index.js";

const socket = io();

socket.emit("requestDocuments", (document) => {
  document.forEach((element) => {
    insertLinkDocument(element.name);
  });
});
