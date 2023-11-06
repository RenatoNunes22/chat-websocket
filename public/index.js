import { addNewDocument } from "./socket.js";

const listDocuments = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocument = document.getElementById("input-documento");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addNewDocument(inputDocument.value);
  inputDocument.value = "";
});

export function insertLinkDocument(documentName) {
  listDocuments.innerHTML += `<a
  href="documento.html?nome=${documentName}"
  class="list-group-item list-group-item-action"
  id="document-${documentName}"
>
${documentName}
</a>`;
}

export function removeLinkDocument(documentName) {
  const document = document.getElementById(`document-${documentName}`);
  listDocuments.removeChild(document);
}
